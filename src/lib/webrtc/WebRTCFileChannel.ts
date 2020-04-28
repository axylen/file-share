import { readFileChunks } from 'lib/helpers';

export type FileInfo = {
  id: string;
  name: string;
  size: number;
};

interface IFileTransferInfo {
  status: 'done' | 'new';
  info?: FileInfo;
}

class WebRTCFileChannel {
  channel: RTCDataChannel;
  chunkSize: number;

  file?: {
    data: ArrayBuffer[];
    info: FileInfo;
    downloaded: number;
  };

  onFileReady = (file: Blob, info: FileInfo): void => {};
  onFileProgress = (info: { size: number; downloaded: number; id: string }): void => {};
  onFileSendProgress = (info: { size: number; sent: number; id: string }): void => {};
  onFileSent = (id: string, size: number): void => {};

  constructor(channel: RTCDataChannel, chunkSize = 16 * 1024) {
    this.channel = channel;
    this.chunkSize = chunkSize;
  }

  onMessage = (data: ArrayBuffer | string) => {
    if (typeof data !== 'string') return this.onData(data);

    const { status, info }: IFileTransferInfo = JSON.parse(data);
    const file = this.file;

    if (status === 'new' && info) this.onNewFile(info);
    else if (status === 'done' && file) this.onFileDownloaded(file.data, file.info);
  };

  private onData = (data: ArrayBuffer) => {
    const file = this.file;
    if (!file) return;

    file.data.push(data);

    const { id, size } = file.info;
    const downloaded = (file.downloaded += data.byteLength);

    this.onFileProgress({ size, id, downloaded });
  };

  protected onNewFile = (info: FileInfo) => {
    this.file = { data: [], downloaded: 0, info };
  };

  protected onFileDownloaded = (data: ArrayBuffer[], info: FileInfo) => {
    const blob = new Blob(data);
    this.onFileReady(blob, info);
    this.file = undefined;
  };

  sendingQueue: { id: string; file: File }[] = [];

  sendFile = (file: File, id: string) => {
    const queue = this.sendingQueue;
    const hasInQueue = !!queue.find((file) => file.id === id);

    if (hasInQueue) return;

    queue.push({ file, id });

    if (queue.length === 1) this._sendFile();
  };

  private _sendFile = () => {
    if (!this.sendingQueue.length) return;

    const { file, id } = this.sendingQueue[0];
    this.sendFileInfo(id, file.name, file.size);

    const chunks = readFileChunks(file, {
      onChunkLoad: () => sendData(),
      chunkSize: this.chunkSize,
    });

    const sendData = this.sendData(chunks, file.size, id);
    this.channel.onbufferedamountlow = sendData;
  };

  protected sendFileInfo = (id: string, name: string, size: number) => {
    const info = {
      status: 'new',
      info: { id, name, size },
    };

    this.channel.send(JSON.stringify(info));
  };

  protected doneSendingFile = () => {
    this.channel.onbufferedamountlow = null;
    this.channel.send(JSON.stringify({ status: 'done' }));
    const file = this.sendingQueue.shift();

    if (file) this.onFileSent(file.id, file.file.size);

    this._sendFile();
  };

  private sendData = (chunks: ArrayBuffer[], size: number, id: string) => {
    const { channel, chunkSize } = this;
    const highWaterMark = Math.max(chunkSize * 8, 1048576);
    const sendChunk = this.sendChunks(chunks, size, id);

    let isSending = false;

    const send = () => {
      if (isSending) return;
      if (!chunks.length) return;

      isSending = true;

      let bufferedAmount = channel.bufferedAmount;

      let done: boolean;
      let value: number | 'noChunk';

      do {
        ({ done = false, value = 0 } = sendChunk.next());

        if (value === 'noChunk') {
          isSending = false;
          return;
        }

        bufferedAmount += value;
        if (bufferedAmount >= highWaterMark) {
          if (channel.bufferedAmount < chunkSize) setTimeout(send, 0);

          isSending = false;
          return;
        }
      } while (!done);

      this.doneSendingFile();
    };

    return send;
  };

  private *sendChunks(chunks: ArrayBuffer[], fileSize: number, id: string) {
    let sentBytes = 0;
    let i = 0;
    while (sentBytes < fileSize) {
      const chunk = chunks[i];
      if (chunk) {
        ++i;
        this.channel.send(chunk);
        sentBytes += chunk.byteLength;
        this.onFileSendProgress({ size: fileSize, sent: sentBytes, id });
        yield chunk.byteLength;
      } else {
        yield 'noChunk';
      }
    }
  }
}

class WebRTCFileChannelWithLog extends WebRTCFileChannel {
  startTime = 0;

  constructor(channel: RTCDataChannel, chunkSize?: number) {
    super(channel, chunkSize);

    const doneSendingFileSuper = this.doneSendingFile;
    const sendFileInfoSuper = this.sendFileInfo;
    const onNewFileSuper = this.onNewFile;
    const onFileDownloadedSuper = this.onFileDownloaded;

    this.onNewFile = (info) => {
      this.startTime = performance.now();
      return onNewFileSuper(info);
    };

    this.onFileDownloaded = (data, info) => {
      console.log(this.speedStats(info.size));
      return onFileDownloadedSuper(data, info);
    };

    this.sendFileInfo = (...args) => {
      this.startTime = performance.now();
      return sendFileInfoSuper(...args);
    };

    this.doneSendingFile = () => {
      const file = this.sendingQueue[0];
      console.log(this.speedStats(file?.file.size || 1));

      return doneSendingFileSuper();
    };
  }

  private speedStats = (fileSize: number) => {
    const time = (performance.now() - this.startTime) / 1000;
    const size = fileSize / 1024 / 1024;
    return {
      time: `${time.toFixed(2)} сек.`,
      size: `${size.toFixed(2)} мб`,
      speed: `${(size / time).toFixed(2)} мб/сек`,
    };
  };
}

export default WebRTCFileChannelWithLog;

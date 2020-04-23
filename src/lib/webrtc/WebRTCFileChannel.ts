export type FileInfo = {
  id: string;
  name: string;
  size: number;
};

interface IFileTransferInfo {
  status: 'done' | 'new';
  info?: FileInfo;
}

type readFileChunksCallbacks = {
  onChunkLoad?: (chunk: ArrayBuffer) => void;
  onLoaded?: (chunks: ArrayBuffer[]) => void;
};

class WebRTCFileChannel {
  channel: RTCDataChannel;
  chunkSize: number;

  file?: {
    data: ArrayBuffer[];
    info: FileInfo;
    downloaded: number;
  };

  startTime = 0;

  onFileReady = (file: Blob, info: FileInfo): void => {};
  onFileProgress = (info: { size: number; downloaded: number; id: string }): void => {};

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

  private onNewFile = (info: FileInfo) => {
    this.startTime = performance.now();
    this.file = { data: [], downloaded: 0, info };
  };

  private onFileDownloaded = (data: ArrayBuffer[], info: FileInfo) => {
    console.log(this.speedStats(info.size));

    const blob = new Blob(data);
    this.onFileReady(blob, info);
    this.file = undefined;
  };

  private speedStats = (fileSize: number) => {
    const time = (performance.now() - this.startTime) / 1000;
    const size = fileSize / 1024 / 1024;
    return {
      time: `${time.toFixed(2)} сек.`,
      size: `${size.toFixed(2)} мб`,
      speed: `${(size / time).toFixed(2)} мб/сек`,
    };
  };

  sendingQueue: { id: string; file: File }[] = [];

  sendFile = (file: File, id: string) => {
    const queue = this.sendingQueue;
    const hasIdInQueue = !!queue.find((file) => file.id === id);

    if (hasIdInQueue) return;

    queue.push({ file, id });

    if (queue.length === 1) this._sendFile();
  };

  private _sendFile = () => {
    if (!this.sendingQueue.length) return;
    const { file, id } = this.sendingQueue[0];

    const chunks = this.readFileChunks(file, {
      onChunkLoad: () => send(),
    });
    this.startSendingFile(id, file.name, file.size);

    const send = this.sendData(chunks, file.size);

    this.channel.onbufferedamountlow = send;
  };

  private startSendingFile = (id: string, name: string, size: number) => {
    this.startTime = performance.now();

    const info = {
      status: 'new',
      info: { id, name, size },
    };

    this.channel.send(JSON.stringify(info));
  };

  private doneSendingFile = () => {
    this.channel.onbufferedamountlow = null;
    this.channel.send(JSON.stringify({ status: 'done' }));
    const file = this.sendingQueue.shift();

    console.log(this.speedStats(file?.file.size || 1));

    this._sendFile();
  };

  splitBuffer = (buf: ArrayBuffer, chunkSize: number) => {
    let offset = 0;

    const chunks = [];

    while (offset < buf.byteLength) {
      chunks.push(buf.slice(offset, offset + chunkSize));
      offset += chunkSize;
    }

    return chunks;
  };

  readFileChunks = (file: File, cb: readFileChunksCallbacks = {}) => {
    const readChunkSize = 1024 * 1024 * 2;
    const chunks: ArrayBuffer[] = [];

    let offset = 0;
    const reader = new FileReader();

    const { onChunkLoad = () => {}, onLoaded = () => {} } = cb;

    reader.onload = () => {
      if (!reader.result || typeof reader.result === 'string') return;
      chunks.push(...this.splitBuffer(reader.result, this.chunkSize));
      offset += readChunkSize;
      onChunkLoad(reader.result);
    };

    reader.onloadend = () => {
      if (offset < file.size) {
        reader.readAsArrayBuffer(file.slice(offset, offset + readChunkSize));
      } else {
        onLoaded(chunks);
      }
    };

    reader.readAsArrayBuffer(file.slice(0, readChunkSize));

    return chunks;
  };

  private sendData = (chunks: ArrayBuffer[], size: number) => {
    const highWaterMark = Math.max(this.chunkSize * 8, 1048576);

    let isSending = false;
    const sendChunk = this.sendChunks(chunks, size);

    const send = () => {
      if (isSending) return;
      if (!chunks.length) return;

      isSending = true;

      let bufferedAmount = this.channel.bufferedAmount;

      let res: IteratorResult<number, void>;

      do {
        res = sendChunk.next();
        bufferedAmount += res.value || 0;

        if (!res.done && res.value === 0) {
          isSending = false;
          return;
        }

        if (bufferedAmount >= highWaterMark) {
          if (this.channel.bufferedAmount < this.chunkSize) {
            setTimeout(send, 0);
          }

          isSending = false;
          return;
        }
      } while (!res.done);

      this.doneSendingFile();
    };

    return send;
  };

  private *sendChunks(chunks: ArrayBuffer[], fileSize: number) {
    let sendedBytes = 0;
    let i = 0;
    while (sendedBytes < fileSize) {
      const chunk = chunks[i];
      if (chunk) {
        i++;
        this.channel.send(chunk);
        sendedBytes += chunk.byteLength;
        yield chunk.byteLength;
      } else {
        yield 0;
      }
    }
  }
}

export default WebRTCFileChannel;

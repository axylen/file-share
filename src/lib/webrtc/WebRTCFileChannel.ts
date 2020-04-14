export type FileInfo = {
  id: string;
  name: string;
  size: number;
};

type FileData = FileInfo & {
  downloadedSize: number;
  data: ArrayBuffer[];
};

interface IFileTransferInfo {
  status: 'done' | 'new';
  info?: FileInfo;
}

class WebRTCFileChannel {
  channel: RTCDataChannel;
  private file: FileData | undefined;

  onFileReady = (file: Blob, info: FileInfo): void => {};
  onFileProgress = (info: { size: number; downloaded: number; id: string }): void => {};

  constructor(connection: RTCPeerConnection, label: string) {
    this.channel = connection.createDataChannel(label);
    connection.addEventListener('datachannel', (evt) => {
      if (evt.channel.label === label) this.channel = evt.channel;
    });

    this.channel.onmessage = (evt) => this.fileMessage(evt.data);
  }

  private fileMessage = (data: ArrayBuffer | string) => {
    if (typeof data !== 'string') {
      const file = this.file;

      if (file) {
        file.data.push(data);
        file.downloadedSize += data.byteLength;
        this.onFileProgress({
          size: file.size,
          downloaded: file.downloadedSize,
          id: file.id,
        });
      }

      return;
    }

    const json: IFileTransferInfo = JSON.parse(data);

    if (json.status === 'new' && json.info) {
      this.file = {
        id: json.info.id,
        name: json.info.name,
        size: json.info.size,
        downloadedSize: 0,
        data: [],
      };
    } else if (json.status === 'done' && this.file) {
      const fileInfo: FileInfo = {
        id: this.file.id,
        name: this.file.name,
        size: this.file.size,
      };
      const file = new Blob(this.file.data);
      this.onFileReady(file, fileInfo);
      this.file = undefined;
    }
  };

  private sendingFileQueue: {
    file: File;
    id: string;
  }[] = [];
  sendFile = (file: File, id: string) => {
    const queue = this.sendingFileQueue;
    queue.push({ file, id });

    if (queue.length > 1) return;

    this._sendFile();
  };

  private _sendFile = () => {
    const queue = this.sendingFileQueue;
    if (!queue.length) return;

    const { file, id } = queue[0];
    const chunkSize = 4 * 1024;

    let offset = 0;
    let isStarted = false;

    const reader = new window.FileReader();
    reader.onload = () => {
      if (!reader.result || typeof reader.result === 'string') return;

      if (!isStarted) {
        const info: IFileTransferInfo = {
          status: 'new',
          info: {
            id,
            name: file.name,
            size: file.size,
          },
        };

        this.channel.send(JSON.stringify(info));
        isStarted = true;
      }

      this.channel.send(reader.result);

      offset += chunkSize;
    };

    reader.onloadend = () => {
      if (offset < file.size) {
        reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
      } else {
        const info: IFileTransferInfo = { status: 'done' };
        this.channel.send(JSON.stringify(info));
        this.sendingFileQueue.shift();
        this._sendFile();
      }
    };

    reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
  };
}

export default WebRTCFileChannel;

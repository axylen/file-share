import WebRTCConnection from './WebRTCConnection';
import WebRTCFileChannel, { FileInfo } from './WebRTCFileChannel';

class WebRTCWithFileChannel extends WebRTCConnection {
  fileChannel: WebRTCFileChannel;

  onFile = (file: Blob, info: FileInfo) => {};

  constructor(config: RTCConfiguration | undefined) {
    super(config);

    const fileChannel = new WebRTCFileChannel(this.connection, 'file');
    this.fileChannel = fileChannel;

    fileChannel.onFileReady = (file, info) => this.onFile(file, info);
  }

  sendFile = (file: File) => this.fileChannel.sendFile(file);
}

export default WebRTCWithFileChannel;

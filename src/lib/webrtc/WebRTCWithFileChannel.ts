import WebRTCConnection from './WebRTCConnection';
import WebRTCFileChannel, { FileInfo } from './WebRTCFileChannel';

import { tryParseJSON } from 'lib/helpers';

class WebRTCWithFileChannel extends WebRTCConnection {
  fileChannel: WebRTCFileChannel;

  onFile = (file: Blob, info: FileInfo) => {};
  onFileProgress = (info: { size: number; downloaded: number; id: string }): void => {};
  onRequestFile = (id: string): File | void => {};

  constructor(config?: RTCConfiguration) {
    super(config);

    const fileDataChannel = this.connection.createDataChannel('file');
    const fileChannel = new WebRTCFileChannel(fileDataChannel, this.connection.sctp?.maxMessageSize);
    this.fileChannel = fileChannel;

    fileChannel.onFileReady = (file, info) => this.onFile(file, info);
    fileChannel.onFileProgress = (info) => this.onFileProgress(info);
    
    fileDataChannel.onmessage = ({ data }) => fileChannel.onMessage(data);
    this.messageChannel.onmessage = this._onMessage;
  }

  handleDataChannel = ({ channel }: RTCDataChannelEvent) => {
    if (channel.label === 'message') this.messageChannel = channel;
    if (channel.label === 'file') this.fileChannel.channel = channel;
  };

  private _onMessage = (evt: MessageEvent) => {
    const asObj = tryParseJSON(evt.data);

    if (asObj && asObj.action === 'sendFile') {
      const file = this.onRequestFile(asObj.id);
      if (file) this.sendFile(file, asObj.id);
      return;
    }

    this.onMessage(evt.data);
  };

  sendFile = (file: File, id: string) => this.fileChannel.sendFile(file, id);

  requestFile = (id: string) => {
    this.sendJSON({ action: 'sendFile', id });
  };
}

export default WebRTCWithFileChannel;

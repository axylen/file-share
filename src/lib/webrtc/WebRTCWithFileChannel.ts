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

    const fileChannel = new WebRTCFileChannel(this.connection, 'file');
    this.fileChannel = fileChannel;

    fileChannel.onFileReady = (file, info) => this.onFile(file, info);
    fileChannel.onFileProgress = (info) => this.onFileProgress(info);

    this.messageChannel.onmessage = this._onMessage;
  }

  destroy = () => {
    this.connection.removeEventListener('datachannel', this._handleDataChannel);
    this.connection.removeEventListener('iceconnectionstatechange', this._handleIceconnectionstatechange);
    this.fileChannel.destroy();
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

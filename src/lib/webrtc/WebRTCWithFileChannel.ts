import WebRTCConnection from './WebRTCConnection';
import WebRTCFileChannel, { FileInfo } from './WebRTCFileChannel';

import { tryParseJSON } from 'lib/helpers';

class WebRTCWithFileChannel extends WebRTCConnection {
  fileChannel: WebRTCFileChannel;

  onFile = (file: Blob, info: FileInfo) => {};
  onRequestFile = (id: string): File | void => {};

  constructor(config: RTCConfiguration | undefined) {
    super(config);

    const fileChannel = new WebRTCFileChannel(this.connection, 'file');
    this.fileChannel = fileChannel;

    fileChannel.onFileReady = (file, info) => this.onFile(file, info);

    this.messageChannel.onmessage = this._onMessage;
  }

  private _onMessage = (evt: MessageEvent) => {
    const asObj = tryParseJSON(evt.data);

    if (asObj && asObj.action === 'sendFile') {
      const file = this.onRequestFile(asObj.id);
      if (file) this.sendFile(file);
      return;
    }

    this.onMessage(evt.data);
  };

  sendFile = (file: File) => this.fileChannel.sendFile(file);

  requestFile = (id: string) => {
    this.sendJSON({ action: 'sendFile', id });
  };
}

export default WebRTCWithFileChannel;

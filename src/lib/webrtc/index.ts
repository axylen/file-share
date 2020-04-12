import WebRTCConnection from './WebRTCConnection';
import WebRTCConnectionWithFileChannel from './WebRTCWithFileChannel';
import WebRTCFileChannel from './WebRTCFileChannel';

declare global {
  type WebRTCWithFileChannel = WebRTCConnectionWithFileChannel;
}

export {
  WebRTCConnection,
  WebRTCConnectionWithFileChannel as WebRTCWithFileChannel,
  WebRTCFileChannel,
};

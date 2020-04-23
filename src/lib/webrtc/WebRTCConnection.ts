const RTCPeerConnectionConfig: RTCConfiguration = {
  iceServers: [
    { urls: ['stun:stun.l.google.com:19302'] },
    { urls: ['stun:stun1.l.google.com:19302'] },
    { urls: ['stun:stun2.l.google.com:19302'] },
    { urls: ['stun:stun3.l.google.com:19302'] },
    { urls: ['stun:stun4.l.google.com:19302'] },
    { urls: ['stun:stun.voipstunt.com'] },
  ],
};

class WebRTCConnection {
  connection: RTCPeerConnection;
  messageChannel: RTCDataChannel;
  onConnection = (status: RTCIceConnectionState) => {};
  onMessage = (msg: string) => {};

  constructor(config: RTCConfiguration = RTCPeerConnectionConfig) {
    const connection = new RTCPeerConnection(config);
    this.connection = connection;

    const messageChannel = connection.createDataChannel('message');

    this.messageChannel = messageChannel;

    messageChannel.onmessage = (evt) => this.onMessage(evt.data);

    connection.ondatachannel = (evt) => this.handleDataChannel(evt);
    connection.oniceconnectionstatechange = () => this.onConnection(connection.iceConnectionState);
  }

  get description() {
    return JSON.stringify(this.connection.localDescription);
  }

  destroy = () => {
    this.connection.ondatachannel = null;
    this.connection.oniceconnectionstatechange = null;
  };

  handleDataChannel = ({ channel }: RTCDataChannelEvent) => {
    if (channel.label === 'message') this.messageChannel = channel;
  };

  createOffer = () => {
    const { connection } = this;

    return new Promise<string>(async (resolve) => {
      connection.onicecandidate = ({ candidate }) => !candidate && resolve(this.description);

      await connection.setLocalDescription(await connection.createOffer());

      setTimeout(() => {
        connection.iceGatheringState !== 'complete' && resolve(this.description);
      }, 2000);
    });
  };

  connect = (descr: string) => {
    const { connection } = this;
    const remote = new RTCSessionDescription(JSON.parse(descr));

    return new Promise<string>(async (resolve) => {
      await connection.setRemoteDescription(remote);

      if (remote.type !== 'offer') return resolve();

      connection.onicecandidate = ({ candidate }) => !candidate && resolve(this.description);
      await connection.setLocalDescription(await connection.createAnswer());
    });
  };

  sendMessage = (msg: string): void => {
    const message = this.messageChannel;

    if (message.readyState === 'open') return message.send(msg);
    setTimeout(() => this.sendMessage(msg), 50);
  };

  sendJSON = (obj: object): void => {
    this.sendMessage(JSON.stringify(obj));
  };
}

export default WebRTCConnection;

declare global {
  type ConnectionState = 'connected' | 'hostWaiting' | 'clientWaiting';
}

export default (isHost: boolean, isConnected: boolean): ConnectionState => {
  if (isConnected) return 'connected';

  return isHost ? 'hostWaiting' : 'clientWaiting';
};

import { SET_CONNECTION, SET_CONNECTION_STATUS } from '../types';

export const hostSetConnection = (connection: WebRTCWithFileChannel): IConnectionAction => ({
  type: SET_CONNECTION,
  payload: { isHost: true, connection },
});

export const clientSetConnection = (connection: WebRTCWithFileChannel): IConnectionAction => ({
  type: SET_CONNECTION,
  payload: { isHost: false, connection },
});

export const setConnectionStatus = (status: RTCIceConnectionState): IConnectionStatusAction => ({
  type: SET_CONNECTION_STATUS,
  payload: { status },
});

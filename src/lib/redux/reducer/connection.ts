import { SET_CONNECTION, SET_CONNECTION_STATUS } from '../action';

declare global {
  interface IConnectionAction {
    type: typeof SET_CONNECTION;
    payload: {
      isHost: boolean;
      connection: WebRTCWithFileChannel;
    };
  }
  interface IConnectionStatusAction {
    type: typeof SET_CONNECTION_STATUS;
    payload: { status: RTCIceConnectionState };
  }
}

type Action = IConnectionAction | IConnectionStatusAction;

interface IConnectionInfo {
  isHost: boolean;
  connection?: WebRTCWithFileChannel;
  status: RTCIceConnectionState;
}

const setConnection = (state: IConnectionInfo, action: IConnectionAction): IConnectionInfo => {
  if (state.connection) state.connection.destroy();
  return { ...state, ...action.payload, status: 'new' };
};

const initState: IConnectionInfo = { isHost: false, status: 'new' };

export default (state: IConnectionInfo = initState, action: Action): IConnectionInfo => {
  switch (action.type) {
    case SET_CONNECTION:
      return setConnection(state, action);
    case SET_CONNECTION_STATUS:
      return { ...state, ...action.payload };
  }
  
  return state;
};

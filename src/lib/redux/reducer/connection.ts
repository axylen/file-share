import { SET_CONNECTION, SET_CONNECTION_STATUS } from '../action';

interface IConnectionInfo {
  isHost: boolean;
  connection?: WebRTCWithFileChannel;
  status: RTCIceConnectionState;
}

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

const initState: IConnectionInfo = {
  isHost: false,
  status: 'new',
};

type Action = IConnectionAction | IConnectionStatusAction;

export default (state: IConnectionInfo = initState, action: Action): IConnectionInfo => {
  switch (action.type) {
    case SET_CONNECTION:
      return { ...state, ...action.payload };
    case SET_CONNECTION_STATUS:
      return { ...state, ...action.payload };
  }
  return state;
};

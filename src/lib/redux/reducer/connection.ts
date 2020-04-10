import { WebRTCWithFileChannel } from 'lib/webrtc';

import { SET_CONNECTION } from '../action';

interface IConnectionInfo {
  isHost: boolean;
  connection?: WebRTCWithFileChannel;
}

declare global {
  interface IConnectionAction {
    type: typeof SET_CONNECTION;
    payload: IConnectionInfo;
  }
}

const initState: IConnectionInfo = {
  isHost: false,
};

export default (state: IConnectionInfo = initState, action: IConnectionAction): IConnectionInfo => {
  switch (action.type) {
    case SET_CONNECTION:
      return { ...state, ...action.payload };
  }
  return state;
};

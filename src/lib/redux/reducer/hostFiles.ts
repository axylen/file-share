import { HOST_ADD_FILES, HOST_REMOVE_FILE, HOST_CLEAR_FILES, SET_SENT_BYTES } from '../action';
import { removeKey } from 'lib/helpers';

declare global {
  interface IHostFileStorage {
    [key: string]: {
      file: File;
      sentBytes: number;
    };
  }
  interface IHostAddFilesAction {
    type: typeof HOST_ADD_FILES;
    payload: IHostFileStorage;
  }
  interface IHostRemoveFileAction {
    type: typeof HOST_REMOVE_FILE;
    payload: { id: string };
  }
  interface IHostClearFilesAction {
    type: typeof HOST_CLEAR_FILES;
  }

  interface ISetSentBytesAction {
    type: typeof SET_SENT_BYTES;
    payload: {
      id: string;
      sentBytes: number;
    };
  }
}

type Action = IHostAddFilesAction | IHostRemoveFileAction | IHostClearFilesAction | ISetSentBytesAction;

const initState: IHostFileStorage = {};

const setSentBytes = (state: IHostFileStorage, action: ISetSentBytesAction) => {
  const files = { ...state };
  files[action.payload.id].sentBytes = action.payload.sentBytes;
  return files;
};

export default (state: IHostFileStorage = initState, action: Action): IHostFileStorage => {
  switch (action.type) {
    case HOST_ADD_FILES:
      return { ...state, ...action.payload };
    case HOST_REMOVE_FILE:
      return removeKey(state, action.payload.id).val;
    case HOST_CLEAR_FILES:
      return {};
    case SET_SENT_BYTES:
      return setSentBytes(state, action);
  }

  return state;
};

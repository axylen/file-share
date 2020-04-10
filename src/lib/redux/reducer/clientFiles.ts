import { CLIENT_ADD_FILES, CLIENT_REMOVE_FILE } from '../action';

declare global {
  interface IClientFileStorage {
    [key: string]: {
      name: string;
      size: number;
      file?: Blob;
    };
  }
  interface IClientAddFilesAction {
    type: typeof CLIENT_ADD_FILES;
    payload: IClientFileStorage;
  }
  interface IClientRemoveFileAction {
    type: typeof CLIENT_REMOVE_FILE;
    payload: { id: string };
  }
}

type Action = IClientAddFilesAction | IClientRemoveFileAction;

const initState: IClientFileStorage = {};

export default (state: IClientFileStorage = initState, action: Action): IClientFileStorage => {
  switch (action.type) {
    case CLIENT_ADD_FILES:
      return { ...state, ...action.payload };
    case CLIENT_REMOVE_FILE:
      const { [action.payload.id]: deleted, ...files } = state;
      return files;
  }
  return state;
};

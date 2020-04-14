import { HOST_ADD_FILES, HOST_REMOVE_FILE, HOST_CLEAR_FILES } from '../action';

declare global {
  interface IHostFileStorage {
    [key: string]: File;
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
}
type Action = IHostAddFilesAction | IHostRemoveFileAction | IHostClearFilesAction;

const initState: IHostFileStorage = {};

export default (state: IHostFileStorage = initState, action: Action): IHostFileStorage => {
  switch (action.type) {
    case HOST_ADD_FILES:
      return { ...state, ...action.payload };
    case HOST_REMOVE_FILE:
      const { [action.payload.id]: deleted, ...files } = state;
      return files;
    case HOST_CLEAR_FILES:
      return {};
  }
  return state;
};

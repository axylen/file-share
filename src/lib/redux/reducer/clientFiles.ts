import { CLIENT_ADD_FILES, CLIENT_REMOVE_FILE, SET_DOWNLOAD_PROGRESS, SAVE_FILE_DATA } from '../action';
import { removeKey } from 'lib/helpers';

declare global {
  interface IClientFileStorage {
    [key: string]: {
      name: string;
      size: number;
      downloadedSize?: number;
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
  interface IClientDownloadProgressAction {
    type: typeof SET_DOWNLOAD_PROGRESS;
    payload: { id: string; downloadedSize: number };
  }
  interface IClientSaveFileDataAction {
    type: typeof SAVE_FILE_DATA;
    payload: { id: string; file: Blob };
  }
}

type Action = IClientAddFilesAction | IClientRemoveFileAction | IClientDownloadProgressAction | IClientSaveFileDataAction;

const setDownloadProgress = (state: IClientFileStorage, action: IClientDownloadProgressAction) => {
  const files = { ...state };
  files[action.payload.id].downloadedSize = action.payload.downloadedSize;
  return files;
};

const saveFileData = (state: IClientFileStorage, action: IClientSaveFileDataAction) => {
  const files = { ...state };
  const file = files[action.payload.id];
  file.file = action.payload.file;
  file.downloadedSize = file.size;
  return files;
};

const initState: IClientFileStorage = {};

export default (state: IClientFileStorage = initState, action: Action): IClientFileStorage => {
  switch (action.type) {
    case CLIENT_ADD_FILES:
      return { ...state, ...action.payload };
    case CLIENT_REMOVE_FILE:
      return removeKey(state, action.payload.id).val;
    case SET_DOWNLOAD_PROGRESS:
      return setDownloadProgress(state, action);
    case SAVE_FILE_DATA:
      return saveFileData(state, action);
  }

  return state;
};

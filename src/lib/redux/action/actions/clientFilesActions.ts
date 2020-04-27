import { CLIENT_ADD_FILES, CLIENT_REMOVE_FILE, SET_DOWNLOAD_PROGRESS, SAVE_FILE_DATA } from '../types';

export const clientAddFiles = (files: IClientFileStorage): IClientAddFilesAction => ({
  type: CLIENT_ADD_FILES,
  payload: files,
});

export const clientRemoveFile = (id: string): IClientRemoveFileAction => ({
  type: CLIENT_REMOVE_FILE,
  payload: { id },
});

export const setDownloadProgress = (id: string, size: number): IClientDownloadProgressAction => ({
  type: SET_DOWNLOAD_PROGRESS,
  payload: { id, downloadedSize: size },
});

export const saveFileData = (id: string, file: Blob): IClientSaveFileDataAction => ({
  type: SAVE_FILE_DATA,
  payload: { id, file },
});

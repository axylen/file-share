import { generateFileId } from 'lib/helpers';

import {
  SET_CONNECTION,
  SET_CONNECTION_STATUS,
  HOST_ADD_FILES,
  HOST_REMOVE_FILE,
  HOST_CLEAR_FILES,
  CLIENT_ADD_FILES,
  CLIENT_REMOVE_FILE,
  SET_DOWNLOAD_PROGRESS,
  SAVE_FILE_DATA,
} from './types';

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

export const hostAddFiles = (files: File[]): IHostAddFilesAction => {
  const filesWithId: { [key: string]: File } = {};
  files.forEach((file) => (filesWithId[generateFileId(file)] = file));

  return { type: HOST_ADD_FILES, payload: filesWithId };
};
export const clientAddFiles = (files: IClientFileStorage): IClientAddFilesAction => ({
  type: CLIENT_ADD_FILES,
  payload: files,
});

export const hostRemoveFile = (id: string): IHostRemoveFileAction => ({
  type: HOST_REMOVE_FILE,
  payload: { id },
});
export const clientRemoveFile = (id: string): IClientRemoveFileAction => ({
  type: CLIENT_REMOVE_FILE,
  payload: { id },
});

export const hostClearFiles = (): IHostClearFilesAction => {
  return { type: HOST_CLEAR_FILES };
};

export const setDownloadProgress = (id: string, size: number): IClientDownloadProgressAction => ({
  type: SET_DOWNLOAD_PROGRESS,
  payload: { id, downloadedSize: size },
});
export const saveFileData = (id: string, file: Blob): IClientSaveFileDataAction => ({
  type: SAVE_FILE_DATA,
  payload: { id, file },
});

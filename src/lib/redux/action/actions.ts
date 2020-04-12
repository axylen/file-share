import { generateFileId } from 'lib/helpers';

import {
  SET_CONNECTION,
  HOST_ADD_FILES,
  HOST_REMOVE_FILE,
  CLIENT_ADD_FILES,
  CLIENT_REMOVE_FILE,
} from './types';

export const hostSetConnection = (connection: WebRTCWithFileChannel): IConnectionAction => ({
  type: SET_CONNECTION,
  payload: { isHost: true, connection },
});
export const clientSetConnection = (connection: WebRTCWithFileChannel): IConnectionAction => ({
  type: SET_CONNECTION,
  payload: { isHost: false, connection },
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

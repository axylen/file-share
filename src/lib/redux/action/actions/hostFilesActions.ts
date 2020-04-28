import { generateFileId } from 'lib/helpers';

import { HOST_ADD_FILES, HOST_CLEAR_FILES, HOST_REMOVE_FILE, SET_SENT_BYTES } from '../types';

export const hostAddFiles = (files: File[]): IHostAddFilesAction => {
  const filesWithId: IHostFileStorage = {};

  files.forEach((file) => {
    const id = generateFileId(file);
    filesWithId[id] = { file, sentBytes: 0 };
  });

  return { type: HOST_ADD_FILES, payload: filesWithId };
};

export const hostRemoveFile = (id: string): IHostRemoveFileAction => ({
  type: HOST_REMOVE_FILE,
  payload: { id },
});

export const hostClearFiles = (): IHostClearFilesAction => {
  return { type: HOST_CLEAR_FILES };
};

export const setSentBytes = (id: string, sentBytes: number): ISetSentBytesAction => {
  return { type: SET_SENT_BYTES, payload: { id, sentBytes } };
};

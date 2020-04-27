import { generateFileId } from 'lib/helpers';

import { HOST_ADD_FILES, HOST_CLEAR_FILES, HOST_REMOVE_FILE } from '../types';

export const hostAddFiles = (files: File[]): IHostAddFilesAction => {
  const filesWithId: IHostFileStorage = {};
  files.forEach((file) => (filesWithId[generateFileId(file)] = file));

  return { type: HOST_ADD_FILES, payload: filesWithId };
};

export const hostRemoveFile = (id: string): IHostRemoveFileAction => ({
  type: HOST_REMOVE_FILE,
  payload: { id },
});

export const hostClearFiles = (): IHostClearFilesAction => {
  return { type: HOST_CLEAR_FILES };
};

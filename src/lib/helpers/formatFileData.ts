import mapObject from './mapObject';

type FileInfo = { name: string; size: number };

export default (files: IHostFileStorage): FileInfo => {
  return mapObject(files, ({ name, size }) => ({ name, size }));
};

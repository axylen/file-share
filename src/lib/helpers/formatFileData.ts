import mapObject from './mapObject';

export default (files: IHostFileStorage) => {
  return mapObject(files, ({ name, size }) => ({ name, size }));
};

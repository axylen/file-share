import mapObject from './mapObject';

export default (files: IHostFileStorage) => {
  return mapObject(files, ({ file }) => ({
    name: file.name,
    size: file.size,
  }));
};

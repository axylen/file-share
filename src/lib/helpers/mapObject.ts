interface IMapCallback<T, U> {
  (value: T[Extract<keyof T, string>], key: Extract<keyof T, string>, object: T): U;
}

interface IMapObject {
  <T extends Object, U>(obj: T, func: IMapCallback<T, U>): { [P in keyof T]: U };
}

const mapObject: IMapObject = (obj, func) => {
  const newObj: any = {};

  for (const id in obj) {
    newObj[id] = func(obj[id], id, obj);
  }

  return newObj;
};

export default mapObject;

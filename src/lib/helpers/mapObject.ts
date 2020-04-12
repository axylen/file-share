type Object = { [key: string]: any };

type Callback = (value?: any, key?: string, object?: Object) => any;

const mapObject = (obj: Object, cb: Callback) => {
  const newObj: any = {};
  for (const id in obj) {
    newObj[id] = cb(obj[id], id, obj);
  }
  return newObj;
};

export default mapObject;

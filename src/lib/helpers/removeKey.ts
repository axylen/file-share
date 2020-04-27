export default (obj: { [key: string]: any }, key: string) => {
  const { [key]: deleted, ...rest } = obj;

  return { deleted, val: rest };
};

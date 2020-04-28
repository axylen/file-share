interface ClassObject {
  [index: string]: boolean;
}

const classnames = (classes: ClassObject | string[]) => {
  if (Array.isArray(classes)) return classes.join(' ');

  return Object.keys(classes)
    .filter((cn) => classes[cn])
    .join(' ');
};

export default classnames;

export default (files: File[]) =>
  files.filter(({ size, name, type }) => {
    if (size === 0) return false;
    if (name.match(/lnk$/)) return false;

    // Some directories in Windows have size = 4096
    if (type === '' && size === 4096) return false;

    return true;
  });

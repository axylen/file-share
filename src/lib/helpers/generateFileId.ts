export default (file: File) => `${file.lastModified}${file.size}${file.name}`;

export default (file: Blob, name: string) => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  document.body.appendChild(link);
  link.download = name;
  link.click();
  window.URL.revokeObjectURL(link.href);
  link.remove();
};

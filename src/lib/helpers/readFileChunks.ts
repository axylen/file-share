type readFileChunksOptions = {
  onChunkLoad?: (chunk: ArrayBuffer) => void;
  onLoaded?: (chunks: ArrayBuffer[]) => void;
  readChunkSize?: number;
  chunkSize?: number;
};

const splitBuffer = (buf: ArrayBuffer, chunkSize: number) => {
  let offset = 0;
  const chunks = [];

  while (offset < buf.byteLength) {
    chunks.push(buf.slice(offset, offset + chunkSize));
    offset += chunkSize;
  }

  return chunks;
};

export default (file: File, options: readFileChunksOptions = {}) => {
  const readChunkSize = options.readChunkSize || 2 * 1024 * 1024;
  const chunkSize = options.chunkSize || 16 * 1024;

  const { onChunkLoad = () => {}, onLoaded = () => {} } = options;

  let offset = 0;
  const reader = new FileReader();

  const chunks: ArrayBuffer[] = [];
  reader.onload = () => {
    if (!reader.result || typeof reader.result === 'string') return;
    chunks.push(...splitBuffer(reader.result, chunkSize));
    offset += readChunkSize;
    onChunkLoad(reader.result);
  };

  reader.onloadend = () => {
    if (offset < file.size) {
      reader.readAsArrayBuffer(file.slice(offset, offset + readChunkSize));
    } else {
      onLoaded(chunks);
    }
  };

  reader.readAsArrayBuffer(file.slice(0, readChunkSize));

  return chunks;
};

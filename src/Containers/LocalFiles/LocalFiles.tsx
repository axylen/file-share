import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { hostAddFiles, hostRemoveFile, setConnectionStatus, setSentBytes } from 'lib/redux';
import { formatFileData, throttle } from 'lib/helpers';

import LocalFilesUI from 'Components/LocalFiles';

interface ILocalFilesProps {
  connection: WebRTCWithFileChannel;
  files: IHostFileStorage;
  addFiles: typeof hostAddFiles;
  removeFile: typeof hostRemoveFile;
  setSentBytes: typeof setSentBytes;
}

const LocalFiles: React.FC<ILocalFilesProps> = ({ connection, files, addFiles, removeFile, setSentBytes }) => {
  useEffect(() => {
    const setProgress = throttle(setSentBytes, 33);
    connection.onFileSendProgress = ({ id, sent }) => setProgress(id, sent);
    connection.onFileSent = (id, size) => setSentBytes(id, size);

    return () => setProgress.stop();
  }, [connection, setSentBytes]);

  const handleAddFiles = useCallback(
    (files: File[]) => {
      const { payload } = addFiles(files);
      connection.sendJSON({ action: 'addFiles', files: formatFileData(payload) });
    },
    [connection, addFiles],
  );

  const handleRemoveFile = useCallback(
    (id: string) => {
      const { sentBytes, file } = files[id];
      if (sentBytes > 0 && sentBytes < file.size) return;

      removeFile(id);
      connection.sendJSON({ action: 'removeFile', id });
    },
    [connection, removeFile, files],
  );

  const filesList = Object.keys(files).map((id) => {
    const { file, sentBytes } = files[id];

    return {
      id,
      name: file.name,
      size: file.size,
      progressBytes: sentBytes,
    };
  });

  return <LocalFilesUI addFiles={handleAddFiles} files={filesList} removeFile={handleRemoveFile} />;
};

const mapStateToProps = (state: ReduxStore) => ({
  files: state.hostFiles,
  connectionStatus: state.connection.status,
});

export default connect(mapStateToProps, { addFiles: hostAddFiles, removeFile: hostRemoveFile, setConnectionStatus, setSentBytes })(LocalFiles);

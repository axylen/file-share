import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { clientAddFiles, clientRemoveFile, setDownloadProgress, saveFileData, setConnectionStatus } from 'lib/redux';
import { saveFile, throttle } from 'lib/helpers';

import RemoteFilesUI from 'Components/RemoteFiles';

interface ISRemoteFilesProps {
  connection: WebRTCWithFileChannel;
  files: IClientFileStorage;
  addFiles: typeof clientAddFiles;
  removeFile: typeof clientRemoveFile;
  setDownloadProgress: typeof setDownloadProgress;
  saveFileData: typeof saveFileData;
  setConnectionStatus: typeof setConnectionStatus;
}

const RemoteFiles: React.FC<ISRemoteFilesProps> = ({ connection, files, addFiles, removeFile, setDownloadProgress, saveFileData, setConnectionStatus }) => {
  useEffect(() => {
    const setProgress = throttle(setDownloadProgress, 33);
    connection.onFileProgress = ({ id, downloaded }) => setProgress(id, downloaded);

    return () => setProgress.stop();
  }, [connection, setDownloadProgress]);

  useEffect(() => {
    connection.onFile = (file, info) => {
      saveFileData(info.id, file);
      saveFile(file, info.name);
    };
  }, [connection, saveFileData]);

  const handleRequestFile = useCallback(
    (id: string) => {
      const file = files[id];
      if (file.file) return saveFile(file.file, file.name);
      if (file.downloadedSize) return;

      setDownloadProgress(id, 1);
      connection.requestFile(id);
    },
    [connection, files, setDownloadProgress],
  );

  const filesList = Object.keys(files).map((id) => {
    const file = files[id];
    const fileInfo: { id: string; name: string; progress?: number } = { id, name: file.name };
    if (file.downloadedSize) fileInfo.progress = (file.downloadedSize / file.size) * 100;
    return fileInfo;
  });

  return <RemoteFilesUI files={filesList} requestFile={handleRequestFile} />;
};

const mapStateToProps = (state: ReduxStore) => ({ files: state.clientFiles, connectionStatus: state.connection.status });

export default connect(mapStateToProps, {
  addFiles: clientAddFiles,
  removeFile: clientRemoveFile,
  setDownloadProgress,
  saveFileData,
  setConnectionStatus,
})(RemoteFiles);

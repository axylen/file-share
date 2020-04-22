import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { clientAddFiles, clientRemoveFile, setDownloadProgress, saveFileData, setConnectionStatus } from 'lib/redux';
import { tryParseJSON, saveFile } from 'lib/helpers';

import Share from 'Components/ShareClient';

interface ISShareClientProps {
  connection: WebRTCWithFileChannel;
  connectionStatus: RTCIceConnectionState;
  files: IClientFileStorage;
  addFiles: typeof clientAddFiles;
  removeFile: typeof clientRemoveFile;
  setDownloadProgress: typeof setDownloadProgress;
  saveFileData: typeof saveFileData;
  setConnectionStatus: typeof setConnectionStatus;
}

const ShareClient: React.FC<ISShareClientProps> = ({ connection, connectionStatus, files, addFiles, removeFile, setDownloadProgress, saveFileData, setConnectionStatus }) => {
  const history = useHistory();

  useEffect(() => {
    connection.onMessage = (msg) => {
      const obj = tryParseJSON(msg);
      if (!obj) return;
      switch (obj.action) {
        case 'addFiles':
          return addFiles(obj.files);
        case 'removeFile':
          return removeFile(obj.id);
      }
    };
  }, [connection, addFiles, removeFile]);

  useEffect(() => {
    connection.onFileProgress = ({ downloaded, id }) => setDownloadProgress(id, downloaded);
    connection.onConnection = (status) => {
      setConnectionStatus(status);
      if (status === 'disconnected') history.push('/');
    };
  }, [connection, setDownloadProgress, setConnectionStatus, history]);

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

  return <Share files={filesList} requestFile={handleRequestFile} connectionStatus={connectionStatus} />;
};

const mapStateToProps = (state: ReduxStore) => ({ files: state.clientFiles, connectionStatus: state.connection.status });

export default connect(mapStateToProps, {
  addFiles: clientAddFiles,
  removeFile: clientRemoveFile,
  setDownloadProgress,
  saveFileData,
  setConnectionStatus,
})(ShareClient);

import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { setDownloadProgress, saveFileData } from 'lib/redux';
import { saveFile, throttle } from 'lib/helpers';

import RemoteFilesUI from 'Components/RemoteFiles';

interface ISRemoteFilesProps {
  connection: WebRTCWithFileChannel;
  files: IClientFileStorage;
  setDownloadProgress: typeof setDownloadProgress;
  saveFileData: typeof saveFileData;
}

const RemoteFiles: React.FC<ISRemoteFilesProps> = ({ connection, files, setDownloadProgress, saveFileData }) => {
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

    return {
      id,
      name: file.name,
      size: file.size,
      progressBytes: file.downloadedSize || 0,
    };
  });

  return <RemoteFilesUI files={filesList} requestFile={handleRequestFile} />;
};

const mapStateToProps = (state: ReduxStore) => ({ files: state.clientFiles, connectionStatus: state.connection.status });

export default connect(mapStateToProps, { setDownloadProgress, saveFileData })(RemoteFiles);

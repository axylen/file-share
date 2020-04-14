import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { hostAddFiles, hostRemoveFile, setConnectionStatus } from 'lib/redux';
import { formatFileData } from 'lib/helpers';

import Share from 'Components/ShareHost';

interface IShareHostProps {
  connection: WebRTCWithFileChannel;
  connectionStatus: RTCIceConnectionState;
  files: IHostFileStorage;
  addFiles: typeof hostAddFiles;
  removeFile: typeof hostRemoveFile;
  setConnectionStatus: typeof setConnectionStatus;
}

const ShareHost: React.FC<IShareHostProps> = ({ connection, files, addFiles, removeFile, connectionStatus, setConnectionStatus }) => {
  useEffect(() => {
    connection.onRequestFile = (id) => files[id];
    connection.onConnection = (status) => {
      setConnectionStatus(status);
      if (status !== 'connected') return;
      connection.sendJSON({ action: 'addFiles', files: formatFileData(files) });
    };
  }, [connection, files, setConnectionStatus]);

  const handleAddFiles = useCallback(
    (files: File[]) => {
      const { payload } = addFiles(files);
      connection.sendJSON({
        action: 'addFiles',
        files: formatFileData(payload),
      });
    },
    [connection, addFiles],
  );

  const handleRemoveFile = useCallback(
    (id: string) => {
      removeFile(id);
      connection.sendJSON({
        action: 'removeFile',
        id,
      });
    },
    [connection, removeFile],
  );

  const filesList = Object.keys(files).map((id) => ({ id, name: files[id].name }));

  return <Share addFiles={handleAddFiles} files={filesList} removeFile={handleRemoveFile} connectionStatus={connectionStatus} />;
};

const mapStateToProps = (state: ReduxStore) => ({
  files: state.hostFiles,
  connectionStatus: state.connection.status,
});

export default connect(mapStateToProps, { addFiles: hostAddFiles, removeFile: hostRemoveFile, setConnectionStatus })(ShareHost);

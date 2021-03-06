import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ShareUI from 'Components/Share';
import { setConnectionStatus, clientAddFiles, clientRemoveFile } from 'lib/redux';
import { formatFileData, tryParseJSON } from 'lib/helpers';

interface IShareProps {
  connection: WebRTCWithFileChannel;
  connectionStatus: RTCIceConnectionState;
  setConnectionStatus: typeof setConnectionStatus;
  addRemoteFiles: typeof clientAddFiles;
  removeRemoteFile: typeof clientRemoveFile;
  localFiles: IHostFileStorage;
  isHost: boolean;
}

const Share: React.FC<IShareProps> = ({ connection, connectionStatus, setConnectionStatus, localFiles, isHost, addRemoteFiles, removeRemoteFile }) => {
  const history = useHistory();

  useEffect(() => {
    connection.onRequestFile = (id) => localFiles[id].file;
  
    connection.onConnection = (status) => {
      setConnectionStatus(status);
      if (status === 'disconnected') return history.push('/');
      if (status !== 'connected') return;
      setTimeout(() => connection.sendJSON({ action: 'addFiles', files: formatFileData(localFiles) }), 50);
    };
  }, [localFiles, connection, history, setConnectionStatus])

  useEffect(() => {
    connection.onMessage = (msg) => {
      const obj = tryParseJSON(msg);
      if (!obj) return;
      if (obj.action === 'addFiles') addRemoteFiles(obj.files);
      else if (obj.action === 'removeFile') removeRemoteFile(obj.id);
    };
  }, [connection, addRemoteFiles, removeRemoteFile]);

  return <ShareUI isConnected={['connected', 'completed'].includes(connectionStatus)} isHost={isHost} connection={connection} disconnect={() => history.replace('/')} />;
};

const mapStateToProps = (state: ReduxStore) => ({
  connectionStatus: state.connection.status,
  localFiles: state.hostFiles,
  isHost: state.connection.isHost,
});

export default connect(mapStateToProps, { setConnectionStatus, addRemoteFiles: clientAddFiles, removeRemoteFile: clientRemoveFile })(Share);

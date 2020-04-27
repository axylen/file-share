import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { hostAddFiles, hostRemoveFile, setConnectionStatus } from 'lib/redux';
import { formatFileData } from 'lib/helpers';

import LocalFilesUI from 'Components/LocalFiles';

interface ILocalFilesProps {
  connection: WebRTCWithFileChannel;
  files: IHostFileStorage;
  addFiles: typeof hostAddFiles;
  removeFile: typeof hostRemoveFile;
}

const LocalFiles: React.FC<ILocalFilesProps> = ({ connection, files, addFiles, removeFile }) => {
  const handleAddFiles = useCallback(
    (files: File[]) => {
      const { payload } = addFiles(files);
      connection.sendJSON({ action: 'addFiles', files: formatFileData(payload) });
    },
    [connection, addFiles],
  );

  const handleRemoveFile = useCallback(
    (id: string) => {
      removeFile(id);
      connection.sendJSON({ action: 'removeFile', id });
    },
    [connection, removeFile],
  );

  const filesList = Object.keys(files).map((id) => ({ id, name: files[id].name }));

  return <LocalFilesUI addFiles={handleAddFiles} files={filesList} removeFile={handleRemoveFile} />;
};

const mapStateToProps = (state: ReduxStore) => ({
  files: state.hostFiles,
  connectionStatus: state.connection.status,
});

export default connect(mapStateToProps, { addFiles: hostAddFiles, removeFile: hostRemoveFile, setConnectionStatus })(LocalFiles);

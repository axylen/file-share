import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { clientAddFiles, clientRemoveFile, setDownloadProgress, saveFileData } from 'lib/redux';
import { tryParseJSON, saveFile } from 'lib/helpers';

import Share from 'Components/ShareClient';

interface ISShareClientProps {
  connection: WebRTCWithFileChannel;
  files: IClientFileStorage;
  addFiles: typeof clientAddFiles;
  removeFile: typeof clientRemoveFile;
  setDownloadProgress: typeof setDownloadProgress;
  saveFileData: typeof saveFileData;
}

const ShareClient: React.FC<ISShareClientProps> = ({
  connection,
  files,
  addFiles,
  removeFile,
  setDownloadProgress,
  saveFileData,
}) => {
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
    connection.onFileProgress = ({ downloaded, id }) => {
      setDownloadProgress(id, downloaded);
    };
  }, [connection, addFiles, removeFile, setDownloadProgress]);

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

  return <Share files={filesList} requestFile={handleRequestFile} />;
};

const mapStateToProps = (state: ReduxStore) => ({ files: state.clientFiles });

export default connect(mapStateToProps, {
  addFiles: clientAddFiles,
  removeFile: clientRemoveFile,
  setDownloadProgress,
  saveFileData,
})(ShareClient);

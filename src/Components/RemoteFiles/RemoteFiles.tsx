import React from 'react';

import FileList from 'Components/FileList';
import css from './RemoteFiles.module.css';

interface IRemoteFilesProps {
  files: { id: string; name: string; progress?: number }[];
  requestFile: (id: string) => void;
}

const RemoteFiles: React.FC<IRemoteFilesProps> = ({ files, requestFile }) => {
  if (!files.length) return <div className={css.noFiles}>There's no files yet :(</div>;
  return (
    <div className={css.container}>
      <FileList files={files} onFileClick={requestFile} iconOnHover="file-download" />
    </div>
  );
};

export default RemoteFiles;

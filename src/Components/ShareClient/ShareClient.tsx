import React from 'react';

import css from './ShareClient.module.css';
import FileList from 'Components/FileList';
import Header from 'Components/Header';

interface IShareClientProps {
  files: { id: string; name: string; progress?: number }[];
  requestFile: (id: string) => void;
}

const ShareClient: React.FC<IShareClientProps> = ({ files, requestFile }) => {
  return (
    <>
      <Header main="Download Files" lead="click on file to start download" />
      <div>
        <main className={css.container}>
          <h2 className={css.heading}>Files</h2>
          <FileList files={files} onFileClick={requestFile} />
        </main>
      </div>
    </>
  );
};

export default ShareClient;

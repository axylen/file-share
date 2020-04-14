import React from 'react';

import css from './ShareClient.module.css';
import FileList from 'Components/FileList';
import Header from 'Components/Header';
import Spinner from 'Components/Spinner';

interface IShareClientProps {
  files: { id: string; name: string; progress?: number }[];
  requestFile: (id: string) => void;
  connectionStatus: RTCIceConnectionState;
}

const SpinnerComp = (
  <div>
    connecting
    <div className={css.spinner}>
      <Spinner />
    </div>
  </div>
);

const ShareClient: React.FC<IShareClientProps> = ({ files, requestFile, connectionStatus }) => {
  const leadText = connectionStatus === 'connected' ? 'click on file to start download' : SpinnerComp;

  return (
    <>
      <Header main="Download Files" lead={leadText} />
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

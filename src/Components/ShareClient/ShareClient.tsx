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

const ShareClient: React.FC<IShareClientProps> = ({ files, requestFile, connectionStatus }) => {
  const leadText = connectionStatus === 'connected' ? 'click on file to start download' : 'connecting';

  return (
    <>
      <Header main="Download files" lead={leadText} />
      <div className={css.connectionBox}>
        {connectionStatus !== 'connected' ? (
          <div className={css.spinner}>
            <Spinner />
          </div>
        ) : (
          <div className={css.connectionStatus}>You are connected</div>
        )}
      </div>
      <main className={css.container}>
        <h2 className={css.heading}>Files</h2>
        {Object.keys(files).length ? <FileList files={files} onFileClick={requestFile} iconOnHover="file-download" /> : <h3 className={css.noFiles}>There's no files yet :(</h3>}
      </main>
    </>
  );
};

export default ShareClient;

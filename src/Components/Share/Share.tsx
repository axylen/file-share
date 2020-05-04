import React from 'react';

import css from './Share.module.css';

import LocalFiles from 'Containers/LocalFiles';
import RemoteFiles from 'Containers/RemoteFiles';
import Spinner from 'Components/Spinner';
import InputToClipboard from 'Components/InputToClipboard';
import Header from 'Components/Header';
import { getConnectionState } from 'lib/helpers';

interface IShareProps {
  connection: WebRTCWithFileChannel;
  isConnected: boolean;
  isHost: boolean;
  disconnect: () => void;
}

const Share: React.FC<IShareProps> = ({ isConnected, isHost, connection, disconnect }) => {
  const remoteFilesSection = {
    connected: <RemoteFiles connection={connection} />,
    hostWaiting: (
      <div>
        <p className={css.remoteFiles__shareInfo}>Copy this link and send it to the person you want to share files with.</p>
        <div className={css.remoteFiles__shareLink}>
          <InputToClipboard text={window.location.href} />
        </div>
      </div>
    ),
    clientWaiting: (
      <div className={css.remoteFiles__spinner}>
        <Spinner />
      </div>
    ),
  };

  const connectionState = getConnectionState(isHost, isConnected);

  return (
    <>
      <Header isHost={isHost} isConnected={isConnected} onDisconnectClick={disconnect} />
      <main className={css.container}>
        <section className={css.container__your_files}>
          <h2 className={css.heading}>Your Files</h2>
          <LocalFiles connection={connection} />
        </section>
        <section className={css.container__remote_files}>
          <h2 className={css.heading}>Remote Files</h2>
          {remoteFilesSection[connectionState]}
        </section>
      </main>
    </>
  );
};

export default Share;

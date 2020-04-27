import React from 'react';

import css from './Header.module.css';
import { getConnectionState, classnames } from 'lib/helpers';

interface IHeaderProps {
  isHost: boolean;
  isConnected: boolean;
  onDisconnectClick?: () => void;
}

const Header: React.FC<IHeaderProps> = ({ isHost, isConnected, onDisconnectClick = () => {} }) => {
  const connectionStatus = getConnectionState(isHost, isConnected);

  const advice = {
    connected: 'Click on remote file to start downloading it',
    hostWaiting: 'Click on your file to remove it',
    clientWaiting: 'Click on your file to remove it',
  }[connectionStatus];

  const connectionState = {
    connected: 'Connected',
    hostWaiting: 'Waiting For Connection',
    clientWaiting: 'Connecting',
  }[connectionStatus];

  const connectionStatusCN = classnames({
    [css.connectionStatus]: true,
    [css.connectionStatus_connected]: connectionStatus === 'connected',
  });

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div>{advice}</div>

        <div className={css.connectionState}>
          <span className={connectionStatusCN} />
          {connectionState}
        </div>

        <button className={css.disconnect} onClick={onDisconnectClick}>
          Disconnect
        </button>
      </div>
    </header>
  );
};

export default Header;

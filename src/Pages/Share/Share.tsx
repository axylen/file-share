import React from 'react';
import { connect } from 'react-redux';

import ShareHost from 'Containers/ShareHost';
import ShareClient from './ShareClient';

interface IShareProps {
  isHost: boolean;
  connection: WebRTCWithFileChannel | undefined;
}

const Share: React.FC<IShareProps> = ({ isHost, connection }) => {
  if (!connection) return <div>Loading</div>;

  return isHost ? <ShareHost connection={connection} /> : <ShareClient />;
};

const mapStateToProps = (state: ReduxStore) => {
  return {
    isHost: state.connection.isHost,
    connection: state.connection.connection,
  };
};

export default connect(mapStateToProps)(Share);

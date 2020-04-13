import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import ShareHost from 'Containers/ShareHost';
import ShareClient from 'Containers/ShareClient';
import { WebRTCWithFileChannel } from 'lib/webrtc';
import { FirestoreConnection } from 'lib/firebase';
import { clientSetConnection } from 'lib/redux';

interface IShareProps {
  isHost: boolean;
  connection: WebRTCWithFileChannel | undefined;
  clientSetConnection: typeof clientSetConnection;
}

const Share: React.FC<IShareProps> = ({ isHost, connection, clientSetConnection }) => {
  const history = useHistory();
  const { id } = useParams();

  if (connection) {
    return isHost ? <ShareHost connection={connection} /> : <ShareClient connection={connection} />;
  }

  if (isHost || !id) {
    history.replace('/');
    return <></>;
  }

  const newConnection = new WebRTCWithFileChannel();
  const firebaseConnection = new FirestoreConnection();

  clientSetConnection(newConnection);

  firebaseConnection
    .getOffer(id)
    .then((offer) => {
      if (!offer) throw new Error(`Can't get offer`);
      return newConnection.connect(offer);
    })
    .then((answer) => firebaseConnection.sendAnswer(id, answer))
    .catch(() => {
      history.replace('/');
    });

  return <div>Loading...</div>;
};

const mapStateToProps = (state: ReduxStore) => {
  return {
    isHost: state.connection.isHost,
    connection: state.connection.connection,
  };
};

export default connect(mapStateToProps, { clientSetConnection })(Share);

import React from 'react';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Share from 'Containers/Share';
import { WebRTCWithFileChannel } from 'lib/webrtc';
import { FirestoreConnection } from 'lib/firebase';
import { clientSetConnection } from 'lib/redux';

interface IShareProps {
  isHost: boolean;
  connection: WebRTCWithFileChannel | undefined;
  clientSetConnection: typeof clientSetConnection;
}

const establishConnection = (connection: WebRTCWithFileChannel, id: string) => {
  const firebaseConnection = new FirestoreConnection();

  return firebaseConnection
    .getOffer(id)
    .then((offer) => {
      if (!offer) throw new Error(`Can't get offer`);
      return connection.connect(offer);
    })
    .then((answer) => firebaseConnection.sendAnswer(id, answer));
};

const SharePage: React.FC<IShareProps> = ({ isHost, connection, clientSetConnection }) => {
  const history = useHistory();
  const { id } = useParams();

  if (connection) {
    return <Share connection={connection} />;
  }

  if (isHost || !id) {
    return <Redirect to="/" />;
  }

  const newConnection = new WebRTCWithFileChannel();
  clientSetConnection(newConnection);

  establishConnection(newConnection, id).catch(() => history.replace('/'));

  return <div>Loading...</div>;
};

const mapStateToProps = (state: ReduxStore) => {
  return {
    isHost: state.connection.isHost,
    connection: state.connection.connection,
  };
};

export default connect(mapStateToProps, { clientSetConnection })(SharePage);

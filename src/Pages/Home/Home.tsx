import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import css from './Home.module.css';

import FileInput from 'Components/FileInput';
import { WebRTCWithFileChannel } from 'lib/webrtc';
import { FirestoreConnection } from 'lib/firebase';
import { hostAddFiles, hostSetConnection } from 'lib/redux';

interface IHomeProps {
  addConnection: any;
  addFiles: any;
}

const Home: React.FC<IHomeProps> = ({ addConnection, addFiles }) => {
  const history = useHistory();

  const handleFileInput = async (files: File[]) => {
    const connection = new WebRTCWithFileChannel();
    addConnection(connection);
    addFiles(files);

    const firestoreCon = new FirestoreConnection();

    const offer = await connection.createOffer();
    const id = await firestoreCon.sendOffer(offer);

    history.push(`/${id}`);
    const answer = await firestoreCon.getAnswer(id);
    connection.connect(answer);
  };

  return (
    <label className={css.container}>
      <h1>Add Files</h1>
      <FileInput onFileInput={handleFileInput} />
    </label>
  );
};

export default connect(null, {
  addConnection: hostSetConnection,
  addFiles: hostAddFiles,
})(Home);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { hostAddFiles, hostSetConnection, hostClearFiles } from 'lib/redux';
import { WebRTCWithFileChannel } from 'lib/webrtc';
import { FirestoreConnection } from 'lib/firebase';
import HomeUI from 'Components/Home';

interface IHomeProps {
  addConnection: typeof hostSetConnection;
  addFiles: typeof hostAddFiles;
  clearFiles: typeof hostClearFiles;
}

const Home: React.FC<IHomeProps> = ({ addConnection, addFiles, clearFiles }) => {
  const [showLoader, setShowLoader] = useState(false);
  const history = useHistory();

  const handleFileInput = async (files: File[]) => {
    const connection = new WebRTCWithFileChannel();
    addConnection(connection);
    clearFiles();
    addFiles(files);

    setShowLoader(true);

    const firestore = new FirestoreConnection();

    const offer = await connection.createOffer();
    const id = await firestore.sendOffer(offer);

    history.push(`/${id}`);
    const answer = await firestore.getAnswer(id);
    connection.connect(answer);
  };

  return <HomeUI onFileInput={handleFileInput} showLoader={showLoader} />;
};

export default connect(null, {
  addConnection: hostSetConnection,
  addFiles: hostAddFiles,
  clearFiles: hostClearFiles,
})(Home);

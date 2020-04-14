import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import css from './Home.module.css';

import FileInput from 'Components/FileInput';
import { WebRTCWithFileChannel } from 'lib/webrtc';
import { FirestoreConnection } from 'lib/firebase';
import { hostAddFiles, hostSetConnection, hostClearFiles } from 'lib/redux';
import Spinner from 'Components/Spinner/Spinner';
import Backdrop from 'Components/Backdrop';

interface IHomeProps {
  addConnection: typeof hostSetConnection;
  addFiles: typeof hostAddFiles;
  clearFiles: typeof hostClearFiles;
}

const Home: React.FC<IHomeProps> = ({ addConnection, addFiles, clearFiles }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleFileInput = async (files: File[]) => {
    const connection = new WebRTCWithFileChannel();
    addConnection(connection);
    clearFiles();
    addFiles(files);

    const firestoreCon = new FirestoreConnection();

    setLoading(true);

    const offer = await connection.createOffer();
    const id = await firestoreCon.sendOffer(offer);

    history.push(`/${id}`);
    const answer = await firestoreCon.getAnswer(id);
    connection.connect(answer);
  };

  return (
    <>
      <label className={css.container}>
        <h1 className={css.heading}>Share files easily</h1>
        <p className={css.lead}>Drop files here or click to select</p>
        <FileInput onFileInput={handleFileInput} />
      </label>
      <Backdrop active={loading}>
        <div className={css.backdrop}>
          <div className={css.spinnerContainer}>
            <Spinner />
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default connect(null, {
  addConnection: hostSetConnection,
  addFiles: hostAddFiles,
  clearFiles: hostClearFiles,
})(Home);

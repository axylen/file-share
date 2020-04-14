import React from 'react';

import css from './ShareHost.module.css';
import InputToClipboard from 'Components/InputToClipboard';
import FileList from 'Components/FileList';
import FileInput from 'Components/FileInput';
import Header from 'Components/Header';
import AddFileCard from 'Components/AddFileCard';
import Spinner from 'Components/Spinner';

interface IShareHostProps {
  files: { id: string; name: string }[];
  addFiles: (files: File[]) => void;
  removeFile: (id: string) => void;
  connectionStatus: RTCIceConnectionState;
}

const SpinnerComp = (
  <div>
    waiting for connection
    <div className={css.spinner}>
      <Spinner />
    </div>
  </div>
);

const ShareHost: React.FC<IShareHostProps> = ({ files, addFiles, removeFile, connectionStatus }) => {
  const mainText = connectionStatus === 'connected' ? 'Client Connected' : 'Share This Link';
  const leadText = connectionStatus === 'connected' ? "don't close the tab until files are downloaded" : SpinnerComp;

  return (
    <>
      <Header main={mainText} lead={leadText} />
      <div>
        <div className={css.urlBox}>
          <InputToClipboard text={window.location.href} />
        </div>
        <main className={css.container}>
          <h2 className={css.heading}>Files</h2>
          <FileList files={files} appendComponent={<AddFileCard onFileInput={addFiles} />} onFileClick={removeFile} />
        </main>
      </div>
      <FileInput onFileInput={addFiles} noFocus />
    </>
  );
};

export default ShareHost;

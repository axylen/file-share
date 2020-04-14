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
  <>
    waiting for connection
    <span className={css.spinner}>
      <Spinner />
    </span>
  </>
);

const ShareHost: React.FC<IShareHostProps> = ({ files, addFiles, removeFile, connectionStatus }) => {
  const mainText = connectionStatus === 'connected' ? 'Files can be downloaded now' : 'Share this link';
  const leadText = connectionStatus === 'connected' ? "don't close the tab until files are downloaded" : SpinnerComp;

  return (
    <>
      <Header main={mainText} lead={leadText} />
      <div className={css.connectionBox}>
        {connectionStatus !== 'connected' ? <InputToClipboard text={window.location.href} /> : <div className={css.connectionStatus}>Connected</div>}
      </div>
      <main className={css.container}>
        <h2 className={css.heading}>Files</h2>
        <FileList files={files} appendComponent={<AddFileCard onFileInput={addFiles} />} onFileClick={removeFile} iconOnHover="file-delete"/>
      </main>
      <FileInput onFileInput={addFiles} noFocus />
    </>
  );
};

export default ShareHost;

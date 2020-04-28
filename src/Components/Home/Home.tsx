import React from 'react';
import css from './Home.module.css';

import FileInput from 'Components/FileInput';
import Spinner from 'Components/Spinner/Spinner';
import Backdrop from 'Components/Backdrop';

interface IHomeProps {
  onFileInput: (files: File[]) => void;
  showLoader?: boolean;
}

const Home: React.FC<IHomeProps> = ({ onFileInput, showLoader = false }) => {
  return (
    <>
      <label className={css.container}>
        <h1 className={css.heading}>Share files easily</h1>
        <p className={css.lead}>Drop files here or click to select</p>
        <FileInput onFileInput={onFileInput} />
      </label>
      <Backdrop active={showLoader}>
        <div className={css.backdrop}>
          <div className={css.spinnerContainer}>
            <Spinner />
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default Home;

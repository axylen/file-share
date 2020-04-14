import React, { useEffect, useState, useRef, useCallback } from 'react';
import css from './FileInput.module.css';

import Backdrop from 'Components/Backdrop';

interface IFileInputProps {
  onFileInput: (files: File[]) => void;
  noFocus?: boolean;
}

type InputFileChangeEvent = React.ChangeEvent<HTMLInputElement>;

const FileInput: React.FC<IFileInputProps> = ({ onFileInput, noFocus }) => {
  const [isInDragMode, setIsInDragMode] = useState(false);
  const dropzoneRef = useRef<HTMLDivElement>(null);

  const handleDrop = useCallback(
    (evt: React.DragEvent) => {
      evt.preventDefault();
      setIsInDragMode(false);

      const files = evt.dataTransfer.files;
      if (files) onFileInput(Array.from(files));
    },
    [onFileInput],
  );

  const handleInput = useCallback(
    (evt: InputFileChangeEvent) => {
      const files = evt.target.files;
      if (files) onFileInput(Array.from(files));
    },
    [onFileInput],
  );

  useEffect(() => {
    const handleDragStart = () => setIsInDragMode(true);
    const handleDragEnd = (evt: DragEvent) => {
      if (evt.target === dropzoneRef.current) setIsInDragMode(false);
    };

    window.addEventListener('dragenter', handleDragStart);
    window.addEventListener('dragleave', handleDragEnd);

    return () => {
      window.removeEventListener('dragenter', handleDragStart);
      window.removeEventListener('dragleave', handleDragEnd);
    };
  }, []);

  return (
    <Backdrop active={isInDragMode}>
      <div ref={dropzoneRef} className={css.input} onDragOver={(evt) => evt.preventDefault()} onDrop={handleDrop}>
        <input type="file" name="files" className="visually-hidden" multiple onChange={handleInput} tabIndex={noFocus ? -1 : 0} />
      </div>
    </Backdrop>
  );
};

export default FileInput;

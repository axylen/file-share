import React, { useEffect, useState, useRef, useCallback } from 'react';
import css from './FileInput.module.css';

import { classnames } from 'lib/helpers';

interface IFileInputProps {
  onFileInput: FileInputFunction;
}

interface FileInputFunction {
  (files: File[]): void;
}

type InputFileChangeEvent = React.ChangeEvent<HTMLInputElement>;

const FileInput: React.FC<IFileInputProps> = ({ onFileInput }) => {
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

  const dropzoneClasses = {
    [css.input]: true,
    [css.inputActive]: isInDragMode,
  };

  return (
    <div
      ref={dropzoneRef}
      className={classnames(dropzoneClasses)}
      onDragOver={(evt) => evt.preventDefault()}
      onDrop={handleDrop}>
      <input type="file" name="files" className="visually-hidden" multiple onChange={handleInput} />
    </div>
  );
};

export default FileInput;

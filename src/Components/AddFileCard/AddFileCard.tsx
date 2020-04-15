import React, { useCallback } from 'react';
import css from './AddFileCard.module.css';
import { filterFiles } from 'lib/helpers';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const AddFileCard: React.FC<{ onFileInput: (files: File[]) => void }> = ({ onFileInput }) => {
  const handleFileInput = useCallback(
    (evt: ChangeEvent) => {
      const files = filterFiles(Array.from(evt.target.files || []));
      if (files.length) onFileInput(files);
    },
    [onFileInput],
  );

  return (
    <label className={css.addFiles}>
      <svg className={css.icon} xmlns="http://www.w3.org/2000/svg">
        <use href="icons.svg#file-add" />
      </svg>
      <span className={css.addFiles__caption}>Add Files</span>
      <input type="file" className="visually-hidden" multiple onChange={handleFileInput} />
    </label>
  );
};

export default AddFileCard;

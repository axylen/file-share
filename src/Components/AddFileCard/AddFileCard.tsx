import React, { useCallback } from 'react';
import css from './AddFileCard.module.css';

const AddFileCard: React.FC<{ onFileInput: (files: File[]) => void }> = ({ onFileInput }) => {
  const handleFileInput = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(evt.target.files || []).filter((file) => {
        if (file.size === 0) return false;
        if (file.name.match(/lnk$/)) return false;
        if (file.type === '' && file.size === 4096) return false;
        return true;
      });
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

import React from 'react';
import css from './AddFileCard.module.css';

const AddFileCard: React.FC<{ onFileInput: (files: File[]) => void }> = ({ onFileInput }) => (
  <label className={css.addFiles}>
    <svg className={css.icon} xmlns="http://www.w3.org/2000/svg">
      <use href="icons.svg#file-add" />
    </svg>
    <span className={css.addFiles__caption}>Add Files</span>
    <input
      type="file"
      className="visually-hidden"
      multiple
      onChange={({ target: { files } }) => files && onFileInput(Array.from(files))}
    />
  </label>
);

export default AddFileCard;

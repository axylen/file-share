import React from 'react';
import css from './AddFileCard.module.css';

const AddFileCard: React.FC<{ onFileInput: (files: File[]) => void }> = ({ onFileInput }) => (
  <label className={css.addFiles}>
    <input
      type="file"
      className="visually-hidden"
      multiple
      onChange={({ target: { files } }) => files && onFileInput(Array.from(files))}
    />
    <span className={css.addFiles__caption}>Add Files</span>
  </label>
);

export default AddFileCard;

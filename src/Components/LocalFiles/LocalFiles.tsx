import React from 'react';

import FileList from 'Components/FileList';
import AddFileCard from 'Components/AddFileCard';
import FileInput from 'Components/FileInput';

import css from './LocalFiles.module.css';

interface ILocalFilesProps {
  files: { id: string; name: string; size: number; progressBytes: number }[];
  addFiles: (files: File[]) => void;
  removeFile: (id: string) => void;
}

const LocalFiles: React.FC<ILocalFilesProps> = ({ files, addFiles, removeFile }) => {
  return (
    <div className={css.container}>
      <FileList files={files} iconOnHover="file-delete" onFileClick={removeFile} appendComponent={<AddFileCard onFileInput={addFiles} />} />
      <FileInput onFileInput={addFiles} noFocus />
    </div>
  );
};

export default LocalFiles;

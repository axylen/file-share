import React from 'react';

import FileList from 'Components/FileList';
import AddFileCard from 'Components/AddFileCard';
import FileInput from 'Components/FileInput';

interface ILocalFilesProps {
  files: { id: string; name: string; progress?: number }[];
  addFiles: (files: File[]) => void;
  removeFile: (id: string) => void;
}

const LocalFiles: React.FC<ILocalFilesProps> = ({ files, addFiles, removeFile }) => {
  return (
    <>
      <FileList files={files} iconOnHover="file-delete" onFileClick={removeFile} appendComponent={<AddFileCard onFileInput={addFiles} />} />
      <FileInput onFileInput={addFiles} noFocus />
    </>
  );
};

export default LocalFiles;

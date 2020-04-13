import React from 'react';
import css from './FileList.module.css';
import FileCard from 'Components/FileCard';

interface IFileListProps {
  files: {
    id: string;
    name: string;
    progress?: number;
  }[];
  onFileClick?: (id: string) => void;
  appendComponent?: React.ReactNode;
}

const FileList: React.FC<IFileListProps> = ({ files, onFileClick, appendComponent }) => {
  return (
    <ul className={css.list}>
      {files.map(({ id, name, progress }) => (
        <li key={id}>
          <FileCard name={name} id={id} onClick={onFileClick} progress={progress} />
        </li>
      ))}
      {appendComponent ? <li>{appendComponent}</li> : null}
    </ul>
  );
};

export default FileList;

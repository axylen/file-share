import React from 'react';
import css from './FileList.module.css';
import FileCard from 'Components/FileCard';

interface IFileListProps {
  files: {
    id: string;
    name: string;
    size: number;
    progressBytes: number;
  }[];
  onFileClick?: (id: string) => void;
  appendComponent?: React.ReactNode;
  iconOnHover: string;
}

const FileList: React.FC<IFileListProps> = ({ files, onFileClick, appendComponent, iconOnHover }) => (
  <ul className={css.list}>
    {files.map((file) => (
      <li key={file.id}>
        <FileCard {...file} onClick={onFileClick} iconOnHover={iconOnHover} />
      </li>
    ))}
    {appendComponent ? <li>{appendComponent}</li> : null}
  </ul>
);

export default FileList;

import React from 'react';
import css from './FileCard.module.css';

interface IFileCardProps {
  name: string;
  id: string;
  onClick?: (id: string) => void;
  progress?: number;
}

const FileCard: React.FC<IFileCardProps> = ({ name, id, onClick, progress }) => {
  return (
    <button className={css.card} onClick={() => onClick && onClick(id)}>
      <div className={css.card__icon}></div>
      <p className={css.card__title} title={name}>
        {name}
      </p>
      <progress value={progress ?? 0} max={100} className={css.card__progress} />
    </button>
  );
};

export default FileCard;

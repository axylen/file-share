import React from 'react';
import css from './FileCard.module.css';

interface IFileCardProps {
  name: string;
  id: string;
  onClick?: (id: string) => void;
  progress?: number;
  iconOnHover: string;
}

const getIcon = (extention: string) => {
  extention = extention.toLowerCase();
  const icons: { [key: string]: string[] } = {
    'file-text': ['txt', 'doc', 'docx', 'rtf', 'odt'],
    'file-image': ['psd', 'tiff', 'tif', 'bmp', 'jpeg', 'jpg', 'gif', 'png', 'ico', 'webp', 'svg', 'eps', 'ai', 'heic', 'nef', 'crw', 'arw'],
    'file-audio': ['ac3', 'aif', 'amr', 'aud', 'mp3', 'flac', 'iff', 'm4a', 'm4b', 'm4p', 'mid', 'mpa', 'ogg', 'wav', 'wave'],
    'file-video': ['mp4', 'avi', 'mpg', 'mov', 'wmv', '3gp', 'flv', 'm4v', 'mts', 'ts', 'webm'],
    'file-zip': ['zip', 'rar', '7z', 'jar', 'gz'],
  };

  for (const icon in icons) {
    if (icons[icon].includes(extention)) return icon;
  }

  return 'file-empty';
};

const FileCard: React.FC<IFileCardProps> = ({ name, id, onClick, progress, iconOnHover }) => {
  const res = name.match(/\.([a-zA-Z0-9]+)$/);
  const extention = res ? res[1] : '';
  const icon = getIcon(extention);

  return (
    <button className={css.card} onClick={() => onClick && onClick(id)}>
      <div className={css.card_iconContainer}>
        <svg className={css.card__icon} xmlns="http://www.w3.org/2000/svg">
          <use href={`icons.svg#${icon}`} />
        </svg>
        <svg className={css.card__icon_hover} xmlns="http://www.w3.org/2000/svg">
          <use href={`icons.svg#${iconOnHover}`} />
        </svg>
      </div>
      <p className={css.card__title} title={name}>
        {name}
      </p>
      <progress value={progress ?? 0} max={100} className={css.card__progress} />
    </button>
  );
};

export default FileCard;

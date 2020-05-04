import React, { useRef } from 'react';
import css from './InputToClipboard.module.css';

interface IInputToClipboardProps {
  text: string;
}

const InputToClipboard: React.FC<IInputToClipboardProps> = ({ text }) => {
  // @ts-ignore no such function in TS yet
  const isShareSupported = !!navigator.share;

  const urlInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    try {
      // @ts-ignore no such function in TS yet
      window.navigator.share({
        title: 'Share Files',
        text: 'Download my files and send yours',
        url: text,
      });
    } catch {}

    if (!navigator.clipboard) {
      return urlInput.current?.focus();
    }

    navigator.clipboard.writeText(text);
  };

  return (
    <div className={css.inputGroup}>
      <input ref={urlInput} className={css.input} readOnly value={text} onFocus={(evt) => evt.target.select()} autoFocus />
      <button className={css.btn} onClick={handleClick}>
        <svg className={css.icon} xmlns="http://www.w3.org/2000/svg">
          <use href={`icons.svg#${isShareSupported ? 'share' : 'copy'}`} />
        </svg>
      </button>
    </div>
  );
};

export default InputToClipboard;

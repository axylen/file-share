import React, { useRef } from 'react';
import css from './InputToClipboard.module.css';

interface IInputToClipboardProps {
  text: string;
}

const InputToClipboard: React.FC<IInputToClipboardProps> = ({ text }) => {
  const urlInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!navigator.clipboard) {
      return urlInput.current?.focus();
    }

    navigator.clipboard.writeText(text);
  };

  const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => evt.target.select();

  return (
    <div className={css.inputGroup}>
      <input
        ref={urlInput}
        className={css.input}
        readOnly
        value={text}
        onFocus={handleInputFocus}
        autoFocus
      />
      <button className={css.btn} onClick={handleClick}>
        <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <use href="icons.svg#copy" />
        </svg>
        Copy
      </button>
    </div>
  );
};

export default InputToClipboard;

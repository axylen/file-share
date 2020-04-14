import React from 'react';
import css from './Backdrop.module.css';
import { classnames } from 'lib/helpers';

const Backdrop: React.FC<{ active?: boolean }> = ({ children, active = true }) => {
  const classes = {
    [css.backdrop]: true,
    [css.backdrop_active]: active,
  };

  return <div className={classnames(classes)}>{children}</div>;
};

export default Backdrop;

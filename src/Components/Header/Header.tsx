import React, { ReactNode } from 'react';

import css from './Header.module.css';

interface IHeaderProps {
  main: ReactNode | string;
  lead: ReactNode | string;
}

const Header: React.FC<IHeaderProps> = ({ main, lead }) => (
  <header className={css.header}>
    <h2 className={css.header__heading}>{main}</h2>
    <p className={css.header__lead}>{lead}</p>
  </header>
);

export default Header;

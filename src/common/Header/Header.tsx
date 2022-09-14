import React from 'react';

import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <span className={styles.header__date}>
      {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}
    </span>
    <h1 className={styles.header__name}>Hi, UserName</h1>
  </header>
);

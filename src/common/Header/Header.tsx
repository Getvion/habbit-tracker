import React from 'react';

import styles from './Header.module.scss';

export const Header = () => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'short'
  };

  const date = new Intl.DateTimeFormat('ru', dateOptions).format(new Date());

  return (
    <header className={styles.header}>
      <span className={styles.header__date}>{date}</span>
      <h1 className={styles.header__name}>
        Привет, <span>UserName!</span>
      </h1>
    </header>
  );
};

import React from 'react';

import { SvgSelector } from '@assets/images/SvgSelector';
import { useFormatDate, useTheme } from '@utils/hooks';

import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { formatDate } = useFormatDate('ru', new Date());

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <span className={styles.header__date}>{formatDate}</span>
        <h1 className={styles.header__name}>Привет, UserName!</h1>
      </div>
      <button className={styles.header__theme} onClick={toggleTheme}>
        {theme === 'light' ? <SvgSelector iconName='moon' /> : <SvgSelector iconName='sun' />}
      </button>
    </header>
  );
};

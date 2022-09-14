import React from 'react';
import { NavLink } from 'react-router-dom';

import { SvgSelector } from '@assets/images/SvgSelector';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footer__list}>
      <li className={styles.list__item}>
        <NavLink className={styles.list__link} to='/'>
          <SvgSelector iconName='home' />
        </NavLink>
      </li>
      <li className={styles.list__item}>
        <NavLink className={styles.list__link} to='/calendar'>
          <SvgSelector iconName='calendar' />
        </NavLink>
      </li>
      <li className={styles.list__item}>
        <NavLink className={styles.list__link} to='/settings'>
          <SvgSelector iconName='settings' />
        </NavLink>
      </li>
    </ul>
  </footer>
);

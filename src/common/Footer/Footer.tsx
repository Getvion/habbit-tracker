import React from 'react';
import { Link } from 'react-router-dom';

import { SvgSelector } from '@assets/images/SvgSelector';

import styles from './Footer.module.scss';

const data = [
  { link: '/', iconName: 'home' },
  { link: '/calendar', iconName: 'calendar' },
  { link: '/settings', iconName: 'settings' }
];

export const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footer__list}>
      {data.map(({ link, iconName }) => (
        <li key={iconName} className={styles.list__item}>
          <Link className={styles.list__link} to={link}>
            <SvgSelector iconName={iconName} />
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);

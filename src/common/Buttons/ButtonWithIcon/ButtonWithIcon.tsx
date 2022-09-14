import React from 'react';

import { SvgSelector } from '@assets/images/SvgSelector';

import styles from './ButtonWithIcon.module.scss';

interface ButtonWithIconProps {
  icon: string;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon }) => (
  <button className={styles.button}>
    <SvgSelector iconName={icon} />
  </button>
);

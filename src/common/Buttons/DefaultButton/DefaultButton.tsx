import React from 'react';

import styles from './DefaultButton.module.scss';

interface DefaultButtonProps {
  type?: 'submit';
  text?: string;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({ type, text }) => (
  <button type={type} className={styles.button}>
    {text}
  </button>
);

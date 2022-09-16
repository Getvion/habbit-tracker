import React from 'react';

import styles from './DefaultButton.module.scss';

interface DefaultButtonProps {
  type?: 'submit';
  text: string;
  disabled?: boolean;
  onClick?: () => {};
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({ type, text, disabled, onClick }) => (
  <button type={type} className={styles.button} disabled={disabled || false} onClick={onClick}>
    {text}
  </button>
);

import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  type?: 'text' | 'email' | 'password';
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ type = 'text', placeholder }) => (
  <input className={styles.input} type={type} placeholder={placeholder} />
);

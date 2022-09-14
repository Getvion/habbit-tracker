import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  type: 'text' | 'email' | 'password';
  name: string;
  value: string;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({ type, name, value, setValue }) => (
  <input className={styles.input} type={type} name={name} value={value} onChange={setValue} />
);

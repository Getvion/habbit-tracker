import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  type?: 'email' | 'password';
  name: string;
  value: string;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ type, name, value, setValue, placeholder }) => (
  <input
    className={styles.input}
    type={type || 'text'}
    name={name}
    value={value}
    onChange={setValue}
    placeholder={placeholder}
  />
);

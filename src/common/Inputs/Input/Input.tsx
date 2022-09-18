import clsx from 'clsx';
import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  type?: 'email' | 'password';
  name: string;
  value: string;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const { type, name, value, setValue, placeholder, error } = props;

  return (
    <input
      className={clsx(styles.input, { [styles.error]: error && value.length })}
      type={type || 'text'}
      id={name}
      name={name}
      value={value}
      onChange={setValue}
      placeholder={placeholder}
    />
  );
};

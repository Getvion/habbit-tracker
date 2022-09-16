import React from 'react';

import { Input } from '@common';

import styles from './InputWithLabel.module.scss';

interface InputWithLabelProps {
  labelText: string;
  labelName: string;
  inputValue: string;
  setInputValue: React.ChangeEventHandler<HTMLInputElement>;
  type?: 'email' | 'password';
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  labelText,
  labelName,
  inputValue,
  type,
  setInputValue
}) => (
  <label className={styles.label} htmlFor={labelName}>
    <span className={styles.label__text}>{labelText}</span>
    <Input name={labelName} value={inputValue} type={type} setValue={setInputValue} />
  </label>
);

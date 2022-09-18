import React from 'react';

import { Input } from '@common';

import styles from './InputWithLabel.module.scss';

interface InputWithLabelProps {
  labelText: string;
  labelName: string;
  inputValue: string;
  setInputValue: React.ChangeEventHandler<HTMLInputElement>;
  type?: 'email' | 'password';
  errorMessage?: string;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = (props) => {
  const { labelText, labelName, inputValue, type, setInputValue, errorMessage } = props;

  return (
    <label className={styles.label} htmlFor={labelName}>
      <span className={styles.label__text}>{labelText}</span>
      <Input
        name={labelName}
        value={inputValue}
        type={type}
        setValue={setInputValue}
        error={Boolean(errorMessage)}
      />

      {errorMessage && inputValue.length ? (
        <span className={styles.label__password__error}>{errorMessage}</span>
      ) : null}
    </label>
  );
};

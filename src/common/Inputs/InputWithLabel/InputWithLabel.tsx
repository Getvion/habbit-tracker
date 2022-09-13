import React from 'react';

import { Input } from '../Input/Input';

import styles from './InputWithLabel.module.scss';

interface InputWithLabelProps {
  labelText: string;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ labelText }) => (
  <label className={styles.label} htmlFor='labelText'>
    {labelText}
    <Input placeholder='text' />
  </label>
);

import React from 'react';

import styles from './Textarea.module.scss';

interface TextareaProps {
  value: string;
  setValue: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ value, setValue, placeholder }) => (
  <textarea
    className={styles.textarea}
    value={value}
    onChange={setValue}
    placeholder={placeholder}
  />
);

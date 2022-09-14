import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonWithIcon, DefaultButton, InputWithLabel } from '@common';

import styles from './Auth.module.scss';

const initialLoginValue = { email: '', pass: '' };

export const Login = () => {
  const [loginValue, setLoginValue] = useState(initialLoginValue);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginValue(initialLoginValue);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__header}>
        <h2 className={styles.auth__title}>Войти</h2>
        <Link to='/register' className={styles.auth__link}>
          Зарегистрироваться
        </Link>
      </div>
      <form onSubmit={onFormSubmit} className={styles.auth__form}>
        <InputWithLabel
          type='email'
          labelText='Почта'
          labelName='email'
          inputValue={loginValue.email}
          setInputValue={(e) => setLoginValue({ ...loginValue, email: e.target.value })}
        />

        <InputWithLabel
          type='password'
          labelText='Пароль'
          labelName='pass'
          inputValue={loginValue.pass}
          setInputValue={(e) => setLoginValue({ ...loginValue, pass: e.target.value })}
        />
        <DefaultButton type='submit' text='Войти' />
      </form>
      <div className={styles.auth__bottom}>
        <span className={styles.auth__bottom__text}>or login with </span>
        <ButtonWithIcon icon='google' />
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonWithIcon, DefaultButton, InputWithLabel } from '@common';
import { isPasswordValid } from '@utils/helpers';

import styles from './Auth.module.scss';

const initialLoginValue = { email: '', pass: '' };

export const Login = () => {
  const [loginValue, setLoginValue] = useState(initialLoginValue);
  const [isPasswordError, setisPasswordError] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginValue(initialLoginValue);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPasswordValid(e.target.value)) {
      setisPasswordError(false);
    } else {
      setisPasswordError(true);
    }

    setLoginValue({ ...loginValue, pass: e.target.value });
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
          setInputValue={onPasswordChange}
          error={isPasswordError}
        />
        <DefaultButton type='submit' text='Войти' disabled={isPasswordError} />
      </form>
      <div className={styles.auth__bottom}>
        <span className={styles.auth__bottom__text}>or login with </span>
        <ButtonWithIcon icon='google' />
      </div>
    </div>
  );
};

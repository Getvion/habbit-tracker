import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonWithIcon, DefaultButton, InputWithLabel } from '@common';
import { isEmailValid, isPasswordValid } from '@utils/helpers';

import styles from './Auth.module.scss';

const initialLoginValue = { email: '', pass: '' };

export const Login = () => {
  const [loginValue, setLoginValue] = useState(initialLoginValue);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState(isPasswordValid(''));
  const [emailErrorMessage, setEmailErrorMessage] = useState(isEmailValid(''));

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginValue(initialLoginValue);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailErrorMessage(isEmailValid(e.target.value));

    setLoginValue({ ...loginValue, email: e.target.value });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordErrorMessage(isPasswordValid(e.target.value));

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
          setInputValue={onEmailChange}
          errorMessage={emailErrorMessage}
        />

        <InputWithLabel
          type='password'
          labelText='Пароль'
          labelName='pass'
          inputValue={loginValue.pass}
          setInputValue={onPasswordChange}
          errorMessage={passwordErrorMessage}
        />
        <DefaultButton
          type='submit'
          text='Войти'
          disabled={Boolean(passwordErrorMessage) || Boolean(emailErrorMessage)}
        />
      </form>
      <div className={styles.auth__bottom}>
        <span className={styles.auth__bottom__text}>or login with </span>
        <ButtonWithIcon icon='google' />
      </div>
    </div>
  );
};

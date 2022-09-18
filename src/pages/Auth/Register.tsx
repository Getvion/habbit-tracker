import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonWithIcon, DefaultButton, InputWithLabel } from '@common';
import { isEmailValid, isPasswordValid } from '@utils/helpers';

import styles from './Auth.module.scss';

const initialRegisterValue = { name: '', email: '', pass: '' };

export const Register = () => {
  const [registerValue, setRegisterValue] = useState(initialRegisterValue);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState(isPasswordValid(''));
  const [emailErrorMessage, setEmailErrorMessage] = useState(isEmailValid(''));

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRegisterValue(initialRegisterValue);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailErrorMessage(isEmailValid(e.target.value));

    setRegisterValue({ ...registerValue, email: e.target.value });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordErrorMessage(isPasswordValid(e.target.value));

    setRegisterValue({ ...registerValue, pass: e.target.value });
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__header}>
        <h2 className={styles.auth__title}>Зарегистрироваться</h2>
        <Link to='/login' className={styles.auth__link}>
          Войти
        </Link>
      </div>
      <form onSubmit={onFormSubmit} className={styles.auth__form}>
        <InputWithLabel
          labelText='Имя'
          labelName='name'
          inputValue={registerValue.name}
          setInputValue={(e) => setRegisterValue({ ...registerValue, name: e.target.value })}
        />
        <InputWithLabel
          type='email'
          labelText='Почта'
          labelName='email'
          inputValue={registerValue.email}
          setInputValue={onEmailChange}
          errorMessage={emailErrorMessage}
        />
        <InputWithLabel
          type='password'
          labelText='Пароль'
          labelName='pass'
          inputValue={registerValue.pass}
          setInputValue={onPasswordChange}
          errorMessage={passwordErrorMessage}
        />
        <DefaultButton
          type='submit'
          text='Зарегистрироваться'
          disabled={Boolean(passwordErrorMessage) || Boolean(emailErrorMessage)}
        />
      </form>
      <div className={styles.auth__bottom}>
        <span className={styles.auth__bottom__text}>or sighn up with </span>
        <ButtonWithIcon icon='google' />
      </div>
    </div>
  );
};

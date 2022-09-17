import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonWithIcon, DefaultButton, InputWithLabel } from '@common';
import { isPasswordValid } from '@utils/helpers';

import styles from './Auth.module.scss';

const initialRegisterValue = { name: '', email: '', pass: '', passConfirm: '' };

export const Register = () => {
  const [RegisterValue, setRegisterValue] = useState(initialRegisterValue);
  const [isPasswordError, setisPasswordError] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRegisterValue(initialRegisterValue);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPasswordValid(e.target.value)) {
      setisPasswordError(false);
    } else {
      setisPasswordError(true);
    }

    setRegisterValue({ ...RegisterValue, pass: e.target.value });
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
          inputValue={RegisterValue.name}
          setInputValue={(e) => setRegisterValue({ ...RegisterValue, name: e.target.value })}
        />
        <InputWithLabel
          type='email'
          labelText='Почта'
          labelName='email'
          inputValue={RegisterValue.email}
          setInputValue={(e) => setRegisterValue({ ...RegisterValue, email: e.target.value })}
        />
        <InputWithLabel
          type='password'
          labelText='Пароль'
          labelName='pass'
          inputValue={RegisterValue.pass}
          error={isPasswordError}
          setInputValue={onPasswordChange}
        />
        <InputWithLabel
          type='password'
          labelText='Повторите пароль'
          labelName='passConfirm'
          inputValue={RegisterValue.passConfirm}
          setInputValue={(e) => setRegisterValue({ ...RegisterValue, passConfirm: e.target.value })}
        />
        <DefaultButton type='submit' text='Зарегистрироваться' disabled={isPasswordError} />
      </form>
      <div className={styles.auth__bottom}>
        <span className={styles.auth__bottom__text}>or sighn up with </span>
        <ButtonWithIcon icon='google' />
      </div>
    </div>
  );
};

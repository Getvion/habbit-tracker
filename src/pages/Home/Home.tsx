import React from 'react';
import { useDispatch } from 'react-redux';

import { DefaultButton } from '@common';
import { setPopupOpen } from '@features/actions';

import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.home} style={{ marginTop: 20 }}>
      <DefaultButton text='Создать привычку' onClick={() => dispatch(setPopupOpen())} />
    </div>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from 'types/interfaces';

import { DefaultButton, HabbitsList } from '@common';
import { setPopupOpen } from '@features/actions';

import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const { habbitsList } = useSelector((state: IStore) => state.habbits);

  return (
    <div className={styles.home} style={{ marginTop: 20 }}>
      <DefaultButton text='Создать привычку' onClick={() => dispatch(setPopupOpen())} />
      <div className={styles.habbits}>
        <HabbitsList list={habbitsList} listTitle='Habbits Title' />
      </div>
    </div>
  );
};

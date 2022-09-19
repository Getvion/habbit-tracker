/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { useDispatch } from 'react-redux';
import { IHabbit } from 'types/interfaces';

import { setSelectedHabbitPopupOpen } from '@features/actions';

import styles from './HabbitsList.module.scss';

interface HabbitsListProps {
  listTitle: string;
  list: IHabbit[];
  onClick?: React.MouseEvent<HTMLDivElement>;
}

export const HabbitsList: React.FC<HabbitsListProps> = (props) => {
  const { list, onClick, listTitle } = props;
  const dispatch = useDispatch();

  const onItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains(styles.item)) {
      dispatch(setSelectedHabbitPopupOpen());
    }
  };

  return (
    <div className={styles.list}>
      <h2 className={styles.list__title}>{listTitle}</h2>
      {list.map(({ title }) => (
        // создать для habbit ункальный id
        <div key={title} className={styles.item} onClick={onItemClick}>
          <h3 className={styles.item__title}>{title}</h3>
          <input className={styles.item__input} type='checkbox' />
        </div>
      ))}
    </div>
  );
};

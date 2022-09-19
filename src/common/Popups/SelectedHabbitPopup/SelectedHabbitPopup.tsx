/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import clsx from 'clsx';
import React from 'react'; // , { useState }
import { useDispatch, useSelector } from 'react-redux';

import { DefaultButton } from '@common';
import {
  setSelectedHabbitPopupClose
  // setSelectedHabbitPopupData
} from '@features/actions';
import { selectSelectedHabbitPopup } from '@features/selectors';

import styles from './SelectedHabbitPopup.module.scss';

// const initialPopupState = { title: '', content: '' };

export const SelectedHabbitPopup = () => {
  const dispatch = useDispatch();

  // const [habbitDataValue, setHabbitDataValue] = useState(initialPopupState);

  const { isOpen } = useSelector(selectSelectedHabbitPopup);

  const onAddHabbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch(setSelectedHabbitPopupData(habbitDataValue));
    dispatch(setSelectedHabbitPopupClose());
  };

  const onClosePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    const backgroudClose = (e.target as Element).classList.contains(styles.popup);

    if (backgroudClose) {
      dispatch(setSelectedHabbitPopupClose());
    }
  };

  return (
    <div className={clsx(styles.popup, { [styles.open]: isOpen })} onClick={onClosePopup}>
      <div className={styles.popup__content}>
        <h3 className={styles.popup__title}>Редактировать привычку</h3>
        <form className={styles.popup__form} onSubmit={onAddHabbit}>
          <DefaultButton
            // onClick={() => dispatch(setSelectedHabbitPopupClose())}
            text='Сохранить'
          />
          <DefaultButton
            // onClick={() => dispatch(setSelectedHabbitPopupClose())}
            text='Удалить'
          />
        </form>
      </div>
    </div>
  );
};

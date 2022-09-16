/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultButton, Input, Textarea } from '@common';
import { setHabbitData, setPopupClose } from '@features/actions';
import { selectCreateHabbitPopup } from '@features/selectors';

import styles from './CreateHabbitPopup.module.scss';

const initialPopupState = { title: '', content: '' };

export const CreateHabbitPopup = () => {
  const dispatch = useDispatch();

  const [habbitDataValue, setHabbitDataValue] = useState(initialPopupState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { isOpen } = useSelector(selectCreateHabbitPopup);

  const onAddHabbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setHabbitData(habbitDataValue));
    dispatch(setPopupClose());
  };

  const onClosePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    const backgroudClose = (e.target as Element).classList.contains(styles.popup);

    if (backgroudClose) {
      dispatch(setPopupClose());
    }
  };

  useEffect(() => {
    if (habbitDataValue.title) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [habbitDataValue.content, habbitDataValue.title]);

  return (
    <div className={clsx(styles.popup, { [styles.open]: isOpen })} onClick={onClosePopup}>
      <div className={styles.popup__content}>
        <h3 className={styles.popup__title}>Создать привычку</h3>
        <form className={styles.popup__form} onSubmit={onAddHabbit}>
          <Input
            name='title'
            value={habbitDataValue.title}
            setValue={(e) => setHabbitDataValue({ ...habbitDataValue, title: e.target.value })}
            placeholder='заголовок привычки'
          />
          <Textarea
            placeholder='описание привычки'
            value={habbitDataValue.content}
            setValue={(e) => setHabbitDataValue({ ...habbitDataValue, content: e.target.value })}
          />
          <DefaultButton
            onClick={() => dispatch(setPopupClose())}
            text='Создать'
            type='submit'
            disabled={isButtonDisabled}
          />
        </form>
      </div>
    </div>
  );
};

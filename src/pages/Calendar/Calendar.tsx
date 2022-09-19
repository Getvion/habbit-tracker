/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import clsx from 'clsx';
import React from 'react';
import { ICalendarDay, ICalendarMonth } from 'types/interfaces';

import { checkDateIsEqual, checkIsToday } from '@utils/helpers';
import { useCalendar } from '@utils/hooks';

import styles from './Calendar.module.scss';

interface CalendarProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  firstWeekDayNumber?: number;
}

export const Calendar: React.FC<CalendarProps> = (props) => {
  const { locale = 'ru', selectedDate: date, selectDate, firstWeekDayNumber = 2 } = props;
  const { functions, state } = useCalendar({ locale, selectedDate: date, firstWeekDayNumber });

  const onDayClick = (day: ICalendarDay) => {
    functions.setSelectedDay(day);
    selectDate(day.date);
  };

  const onMonthClick = (monthesName: ICalendarMonth) => {
    functions.setSelectedMonthByIndex(monthesName.monthIndex);
    functions.setMode('days');
  };

  const onYearClick = (year: number) => {
    functions.setSelectedYear(year);
    functions.setMode('monthes');
  };

  return (
    <div className={styles.app__container}>
      <div className={styles.calendar}>
        <div className={styles.calendar__header}>
          <div
            className={styles.calendar__header__arrow__left}
            onClick={() => functions.onClickArrow('left')}
          />
          {state.mode === 'days' && (
            <div onClick={() => functions.setMode('monthes')}>
              {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
            </div>
          )}
          {state.mode === 'monthes' && (
            <div onClick={() => functions.setMode('years')}>{state.selectedYear}</div>
          )}
          {state.mode === 'years' && (
            <div>
              {state.selectedYearsInterval[0]} -{' '}
              {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
            </div>
          )}
          <div
            className={styles.calendar__header__arrow__right}
            onClick={() => functions.onClickArrow('right')}
          />
        </div>
        <div className={styles.calendar__body}>
          {state.mode === 'days' && (
            <>
              <div className={styles.calendar__week__names}>
                {state.weekDaysNames.map((weekDaysName) => (
                  <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
                ))}
              </div>
              <div className={styles.calendar__days}>
                {state.calendarDays.map((day) => {
                  const isToday = checkIsToday(day.date);
                  const isSelectedDay = checkDateIsEqual(day.date, state.selectedDay.date);
                  const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;

                  return (
                    <div
                      key={`${day.dayNumber}-${day.monthIndex}`}
                      onClick={() => onDayClick(day)}
                      className={clsx(styles.calendar__day, {
                        [styles.calendar__today__item]: isToday,
                        [styles.calendar__selected__item]: isSelectedDay,
                        [styles.calendar__additional__day]: isAdditionalDay
                      })}
                    >
                      {day.dayNumber}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {state.mode === 'monthes' && (
            <div className={styles.calendar__pick__items__container}>
              {state.monthesNames.map((monthesName: ICalendarMonth) => {
                const isCurrentMonth =
                  new Date().getMonth() === monthesName.monthIndex &&
                  state.selectedYear === new Date().getFullYear();
                const isSelectedMonth = monthesName.monthIndex === state.selectedMonth.monthIndex;

                return (
                  <div
                    key={monthesName.month}
                    onClick={() => onMonthClick(monthesName)}
                    className={clsx(styles.calendar__pick__item, {
                      [styles.calendar__selected__item]: isSelectedMonth,
                      [styles.calendar__today__item]: isCurrentMonth
                    })}
                  >
                    {monthesName.monthShort}
                  </div>
                );
              })}
            </div>
          )}

          {state.mode === 'years' && (
            <div className={styles.calendar__pick__items__container}>
              <div className={styles.calendar__unchoosable__year}>
                {state.selectedYearsInterval[0] - 1}
              </div>
              {state.selectedYearsInterval.map((year: number) => {
                const isCurrentYear = new Date().getFullYear() === year;
                const isSelectedYear = year === state.selectedYear;

                return (
                  <div
                    key={year}
                    onClick={() => onYearClick(year)}
                    className={clsx(styles.calendar__pick__item, {
                      [styles.calendar__selected__item]: isSelectedYear,
                      [styles.calendar__today__item]: isCurrentYear
                    })}
                  >
                    {year}
                  </div>
                );
              })}
              <div className={styles.calendar__unchoosable__year}>
                {state.selectedYearsInterval[state.selectedYearsInterval.length - 1] + 1}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

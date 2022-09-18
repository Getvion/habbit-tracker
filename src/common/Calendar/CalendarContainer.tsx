import React, { useState } from 'react';

import { Calendar } from './components/Calendar/Calendar';
import { formatDate } from './utils/helpers/date';

import './static/css/global.css';

export const CalendarContainer = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='app__container'>
      <div className='date__container'>{formatDate(selectedDate, 'DD MM YYYY')}</div>
      <Calendar selectedDate={selectedDate} selectDate={setSelectedDate} firstWeekDayNumber={2} />
    </div>
  );
};

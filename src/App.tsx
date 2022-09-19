import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { CreateHabbitPopup, Layout, SelectedHabbitPopup } from '@common';
import { Calendar, Home, Login, Register, Settings } from '@pages';
import { useTheme } from '@utils/hooks';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <CreateHabbitPopup />
      <SelectedHabbitPopup />

      <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='/calendar'
            element={
              <Calendar
                selectedDate={selectedDate}
                selectDate={setSelectedDate}
                firstWeekDayNumber={2}
              />
            }
          />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </>
  );
};

export default App;

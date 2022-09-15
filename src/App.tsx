import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '@common';
import { Calendar, Home, Login, Register, Settings } from '@pages';

const App = () => (
  <Routes>
    <Route element={<Login />} path='/login' />
    <Route element={<Register />} path='/register' />

    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/settings' element={<Settings />} />
    </Route>
  </Routes>
);

export default App;

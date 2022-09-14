import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login, Main, Register } from '@pages';

const App = () => (
  <div className='app'>
    <Routes>
      <Route element={<Login />} path='/login' />
      <Route element={<Register />} path='/register' />
      <Route element={<Main />} path='/' />
    </Routes>
  </div>
);

export default App;

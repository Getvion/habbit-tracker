import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login, Register } from '@pages';

const App = () => (
  <div className='app'>
    <Routes>
      <Route element={<Login />} path='/login' />
      <Route element={<Register />} path='/register' />
    </Routes>
  </div>
);

export default App;

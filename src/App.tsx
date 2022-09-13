import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Empty } from '@common/empty';

const App = () => (
  <div className='app'>
    <Routes>
      <Route element={<Empty />} path='/' />
    </Routes>
  </div>
);

export default App;

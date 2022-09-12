import { Route, Routes } from 'react-router-dom';

import { Empty } from '@common/empty';

const App = () => (
  <div>
    <Routes>
      <Route element={<Empty />} path='/' />
    </Routes>
  </div>
);

export default App;

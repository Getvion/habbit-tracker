import { useDispatch } from 'react-redux';

import { store } from '@features/store';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

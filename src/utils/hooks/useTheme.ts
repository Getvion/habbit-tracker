import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '@features/actions';

export const useTheme = () => {
  const theme = useSelector((state: { theme: string }) => state.theme);
  const dispatch = useDispatch();

  const localTheme = localStorage.getItem('theme');

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (localTheme) dispatch(setTheme(localTheme));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const root = document.querySelector(':root') as HTMLElement;
    const components = [
      'body-background',
      'text-color',
      'components-background',
      'color-text',
      'color-placeholder',
      'color-additional',
      'color-additional7',
      'background-color-calendar',
      'background-color-calendar-header',
      'images-arrow'
    ];

    components.forEach((component) => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
  }, [theme]);

  return { theme, toggleTheme };
};

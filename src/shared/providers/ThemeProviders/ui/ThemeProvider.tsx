import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY } from '@/shared/constants/localStorageKey';
import { ThemeContext, ThemeTypes } from '../config/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_KEY.theme) as ThemeTypes) || 'light';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeTypes>(defaultTheme);
  const defaultValue = useMemo(
    () => ({
      setTheme,
      theme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};

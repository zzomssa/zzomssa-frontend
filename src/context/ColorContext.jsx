import React, { useState, useEffect, createContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../style';

const getThemeFromStorage =
  localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

const ColorInitialState = {
  theme: getThemeFromStorage,
  setTheme: () => {},
};

const ColorContext = createContext(ColorInitialState);

const ColorProvider = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromStorage);

  const value = {
    theme,
    setTheme,
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ColorContext.Provider value={value}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ColorContext.Provider>
  );
};

export default ColorContext;

export { ColorProvider };

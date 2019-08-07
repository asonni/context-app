import React, { createContext } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as Theme } from '@material-ui/styles';

import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [isDarkMode, setIsDarkMode] = useToggleState(false);
  const changeThemeMode = e => setIsDarkMode(e.target.checked);
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light'
    }
  });
  return (
    <ThemeContext.Provider value={{ isDarkMode, changeThemeMode }}>
      <Theme theme={theme}>{props.children}</Theme>
    </ThemeContext.Provider>
  );
};

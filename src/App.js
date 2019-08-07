import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './Navbar';
import Form from './Form';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <LanguageProvider>
        <Navbar />
        <Form />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

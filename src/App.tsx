import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './components/home/Home';

import '@fontsource/roboto/300.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Catalogue from './components/catalogue/Catalogue';
import Analysis from './components/analysis/Analysis';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9db4b8'
    },
    secondary: {
      main: '#cb8f76'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/catalogue'} element={<Catalogue/>} />
          <Route path={'/analysis'} element={<Analysis/>} />
        </Routes>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;

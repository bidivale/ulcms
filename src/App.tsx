import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; 
import { grey } from '@mui/material/colors';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const elegantTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: grey,
    secondary: {
      main: '#e65100',
    },
  },
  
  shape: {
    borderRadius: 2
  }
});


function App() {
  return (
    <ThemeProvider theme={elegantTheme}>
      <CssBaseline />
    <BrowserRouter>
        <Routes>
          {/* Main layout */}
          <Route path='/*' element={<MainLayout />}></Route>
        </Routes>

      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
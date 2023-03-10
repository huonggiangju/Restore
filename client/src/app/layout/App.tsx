import { createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Catalog from '../../features/catalog/Catalog';
import { Product } from '../models/product';
import Header from './Header';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme='colored' /> 
      <CssBaseline/> 
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Outlet/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;

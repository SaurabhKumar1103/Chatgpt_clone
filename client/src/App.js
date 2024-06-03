import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme'
import Summary from './pages/Summary';
import { Toaster } from 'react-hot-toast';
import Paragraph from './pages/Paragraph';
import ChatBot from './pages/Chatbot';
import JsConverter from './pages/JsConverter';
import ScifiImage from './pages/ScifiImage';

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings(), []));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter/>} />
          <Route path="/scifi-image" element={<ScifiImage/>} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
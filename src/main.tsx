import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    navy: '#1A2233', // placeholder navy
    beige: '#F8F6F3',
    accent: '#E6EEF6', // icy blue
    gray: '#E0E0E0',
    white: '#fff',
  },
  fonts: {
    heading: 'Inter, DM Sans, sans-serif',
    body: 'Open Sans, Roboto, sans-serif',
  },
  borderRadius: '16px',
  shadow: '0 4px 24px rgba(26,34,51,0.08)',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
); 
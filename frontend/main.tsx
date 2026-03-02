import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CustomerProvider } from './contexts/CustomerContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes.ts';

// Este arquivo é a "ponte" entre o React e o seu navegador
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CustomerProvider>
        <App />
      </CustomerProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
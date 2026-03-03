import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Sem .tsx
import { CustomerProvider } from './contexts/CustomerContext'; // Sem .tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes'; // Sem .ts

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CustomerProvider>
        <App />
      </CustomerProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/index.css';

if (import.meta.env.DEV) {
  console.log('[Portfolio] Vite dev server is running');
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

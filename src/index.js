import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* avvolge il componente App con AppProvider per fornire il contesto globale */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

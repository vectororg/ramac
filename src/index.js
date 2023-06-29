import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';
import { AuthProvider } from './contexts/AuthProvider';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <AuthProvider>
      <App />
    </AuthProvider>    
  </I18nextProvider>,
  document.getElementById('root')
);

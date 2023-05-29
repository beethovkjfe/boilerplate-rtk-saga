import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import React from 'react';

import i18next from 'config/i18n';
import { store, history } from 'store/store';

import './index.css';
import reportWebVitals from './reportWebVitals';
import AppManagement from './pages/AppManagement';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Router history={history}>
      <I18nextProvider i18n={i18next}>
        <CssBaseline />
        <AppManagement />
      </I18nextProvider>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

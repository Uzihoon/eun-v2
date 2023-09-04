import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { initIntl, t } from '~i18n';

export const run = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  await Promise.allSettled([initIntl(t)]);

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <Helmet>
          <title>EUN</title>
        </Helmet>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
  );
};

run();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

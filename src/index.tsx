import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './services/app/app';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { checkToken } from './store/utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

checkToken();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

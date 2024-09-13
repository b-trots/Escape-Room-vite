import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './services/app/app';
import { dispatch, store } from './store/store';
import { Provider } from 'react-redux';
import { questsAction } from './store/api-actions/quest-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
dispatch(questsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

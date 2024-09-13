import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { questsSlice } from './slices/quest-slice/quest-slice';

const api = createAPI();

const store = configureStore({
  reducer: {
    [questsSlice.name]: questsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

const dispatch = store.dispatch;

export { api, store, dispatch };

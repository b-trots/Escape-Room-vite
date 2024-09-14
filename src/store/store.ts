import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { questSlice } from './slices/quest-slice/quest-slice';
import { bookingSlice } from './slices/booking-slice/booking-slice';
import { userSlice } from './slices/user-slice/user-slice';

const api = createAPI();

const store = configureStore({
  reducer: {
    [questSlice.name]: questSlice.reducer,
    [bookingSlice.name]: bookingSlice.reducer,
    [userSlice.name]: userSlice.reducer,
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


import { UserSlice } from '../../../types/store-types/slices-types';
import { AuthStatus, SliceName } from '../../../const/app-const';
import { checkAuthAction, loginAction, logoutAction } from '../../api-actions/user-actions';
import { AuthStatusValues } from '../../../types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userState: UserSlice = {
  authStatus: AuthStatus.Unknown,
  userEmail: '',
};

const userSlice = createSlice({
  name: SliceName.User,
  initialState: userState,
  reducers: {
    setStatus: (state, action: PayloadAction<AuthStatusValues>) => {
      state.authStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userEmail = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {

        state.authStatus = AuthStatus.Auth;
        state.userEmail = action.payload.email;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.userEmail = '';
      });
  },
  selectors: {
    authStatus: (state) => state.authStatus,
    userEmail: (state) => state.userEmail,
  },
});
const userSelectors = userSlice.selectors;
const { setStatus } = userSlice.actions;
const userActions = userSlice.actions;

export { userSlice, userSelectors, userActions, setStatus };

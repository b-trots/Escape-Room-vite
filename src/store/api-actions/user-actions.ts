import { APIRoute } from '../../const/app-const';
import { dropToken, saveToken } from '../../services/token';
import { AuthData, User } from '../../types/user';
import { appCreateAsyncThunk } from './quest-actions';


const checkAuthAction = appCreateAsyncThunk<string, undefined>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const {
      data: { email },
    } = await api.get<User>(APIRoute.Login);
    return email;
  }
);

const loginAction = appCreateAsyncThunk<{ email: string }, AuthData>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const {
      data: { token },
    } = await api.post<User>(APIRoute.Login, { email, password });
    saveToken(token);
    return { email };
  }
);

const logoutAction = appCreateAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export { checkAuthAction, logoutAction, loginAction, appCreateAsyncThunk };

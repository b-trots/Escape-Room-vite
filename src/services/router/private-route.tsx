import { Outlet, Navigate } from 'react-router-dom';
import { Loading } from '../../components/main/loading/loading';
import { AppRoute, AuthStatus } from '../../const/app-const';
import { userSelectors } from '../../store/slices/user-slice/user-slice';
import { useAppSelector } from '../../hooks/store';
import { AuthStatusValues } from '../../types/user';

const getRoute = (status: AuthStatusValues, redirection: AppRoute) =>
  function AccessRoute() {

    const authStatus = useAppSelector(userSelectors.authStatus);
    switch (authStatus) {
      case status:
        return <Outlet />;
      case AuthStatus.Unknown:
        return <Loading />;
      default:
        return <Navigate to={redirection} />;
    }
  };

const PrivateRoute = getRoute(AuthStatus.Auth, AppRoute.Login);
const PublicRoute = getRoute(AuthStatus.NoAuth, AppRoute.Home);

export { PrivateRoute, PublicRoute };

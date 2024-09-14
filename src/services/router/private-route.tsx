import { Outlet, Navigate } from 'react-router-dom';
import { Loading } from '../../components/main/loading/loading';
import { AppRoute, AuthStatus } from '../../const/app-const';

const getRoute = (status: AuthStatus, redirection: AppRoute) =>
  function AccessRoute() {
    const authStatus = Setting.authStatus;
    // const authStatus = useAppSelector(userSelectors.authStatus);
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

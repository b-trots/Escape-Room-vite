import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute, AuthStatus, Setting } from '../../const/const';
import { Loading } from '../../components/main/loading/loading';

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

import { Link } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const/app-const';
import { LoginLogoutButton } from '../../const/template-const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user-slice/user-slice';

function LoginButton(): JSX.Element {
  const authStatus = useAppSelector(userSelectors.authStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  return isAuth ? (
    <Link className="btn btn--accent header__side-item" to={AppRoute.Login}>
      {LoginLogoutButton.Logout}
    </Link>
  ) : (
    <Link
      className="btn header__side-item header__login-btn"
      to={AppRoute.Login}
    >
      {LoginLogoutButton.Login}
    </Link>
  );
}

export { LoginButton };

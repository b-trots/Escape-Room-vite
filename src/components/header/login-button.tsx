import { Link } from 'react-router-dom';
import { AuthStatus, AppRoute } from '../../const/app-const';
import { LoginLogoutButton } from '../../const/template-const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user-slice/user-slice';
import { dispatch } from '../../store/store';
import { logoutAction } from '../../store/api-actions/user-actions';

function LoginButton(): JSX.Element {
  const authStatus = useAppSelector(userSelectors.authStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  const handleClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return isAuth ? (
    <a className="btn btn--accent header__side-item" onClick={handleClick}>
      {LoginLogoutButton.Logout}
    </a>
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

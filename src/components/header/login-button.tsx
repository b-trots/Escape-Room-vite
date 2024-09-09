import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus, Setting } from '../../const';

function LoginButton(): JSX.Element {
  const authStatus = Setting.authStatus;
  const isAuth = authStatus === AuthStatus.Auth;

  return isAuth ? (
    <Link className="btn btn--accent header__side-item" to={AppRoute.Login}>
      Выйти
    </Link>
  ) : (
    <Link
      className="btn header__side-item header__login-btn"
      to={AppRoute.Login}
    >
      Вход
    </Link>
  );
}

export { LoginButton };

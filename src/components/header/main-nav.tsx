import { Link } from 'react-router-dom';
import {
  AppRoute,
  AuthStatus,
  GeneralNav,
  GeneralNavItem,
  Setting,
} from '../../const/const';

function MainNav(): JSX.Element {
  const authStatus = Setting.authStatus;
  const getGeneralNavElementsCount = () =>
    authStatus === AuthStatus.Auth
      ? GeneralNavItem.Auth
      : GeneralNavItem.NoAuth;
  const navItemsCount = getGeneralNavElementsCount();

  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        {Object.keys(GeneralNav)
          .slice(0, navItemsCount)
          .map((item) => (
            <li key={item} className="main-nav__item">
              <Link
                className="link"
                to={AppRoute[item as keyof typeof GeneralNav]}
              >
                {GeneralNav[item as keyof typeof GeneralNav]}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export { MainNav };

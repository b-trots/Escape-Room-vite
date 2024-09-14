import { Link } from 'react-router-dom';
import { AuthStatus, GeneralNavItem, AppRoute } from '../../const/app-const';
import { GeneralNav } from '../../const/template-const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user-slice/user-slice';


function MainNav(): JSX.Element {
  const authStatus = useAppSelector(userSelectors.authStatus);
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

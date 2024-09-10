import { Hotline } from './hotline';
import { LoginButton } from './login-button';

function SideNav(): JSX.Element {
  return (
    <div className="header__side-nav">
      <LoginButton />
      <Hotline />
    </div>
  );
}

export { SideNav };

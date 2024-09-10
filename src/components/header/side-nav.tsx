import { Hotline } from './hotline';
import { LoginButton } from './login-button';

function SideNav(): React.ReactNode {
  return (
    <div className="header__side-nav">
      <LoginButton />
      <Hotline />
    </div>
  );
}

export { SideNav };

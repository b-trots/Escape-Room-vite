import { Logo } from './logo';
import { MainNav } from './main-nav';
import { SideNav } from './side-nav';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <MainNav />
        <SideNav />
      </div>
    </header>
  );
}

export { Header };

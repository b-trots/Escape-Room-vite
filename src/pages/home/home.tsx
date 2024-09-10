import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { MainHome } from './main-home';

function Home(): JSX.Element {
  return (
    <div>
      <FirstComponent />
      <div className="wrapper">
        <Header />
        <MainHome />
        <Footer />
      </div>
    </div>
  );
}

export { Home };

import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { questsAction } from '../../store/api-actions/quest-actions';
import { store } from '../../store/store';
import { MainHome } from './main-home';

store.dispatch(questsAction());

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

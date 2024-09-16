import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundVector } from '../../components/main/background-vector/background-vector';
import { TitlePageName } from '../../const/app-const';
import { useChangeTitle } from '../../hooks/title';
import { questsAction } from '../../store/api-actions/quest-actions';
import { store } from '../../store/store';
import { MainHome } from './main-home';

store.dispatch(questsAction());

function Home(): JSX.Element {
  useChangeTitle(TitlePageName.Title);
  return (
    <div>
      <BackgroundVector />
      <div className="wrapper">
        <Header />
        <MainHome />
        <Footer />
      </div>
    </div>
  );
}

export { Home };

import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundVector } from '../../components/main/background-vector/background-vector';
import { TitlePageName } from '../../const/app-const';
import { useChangeTitle } from '../../hooks/title';
import { MainMyQuests } from './main-my-quests';

function MyQuests(): JSX.Element {
  useChangeTitle(TitlePageName.MyQuests);
  return (
    <div>
      <BackgroundVector />
      <div className="wrapper">
        <Header />
        <MainMyQuests />
        <Footer />
      </div>
    </div>
  );
}

export { MyQuests };

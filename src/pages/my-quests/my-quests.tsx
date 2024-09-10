import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { MainMyQuests } from './main-my-quests';

function MyQuests(): JSX.Element {
  return (
    <div>
      <FirstComponent />
      <div className="wrapper">
        <Header />
        <MainMyQuests />
        <Footer />
      </div>
    </div>
  );
}

export { MyQuests };

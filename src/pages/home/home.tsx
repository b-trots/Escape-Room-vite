import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { ComplexityFilter } from '../../components/main/filters/complexity-filter/complexity-filter';
import { TopicFilter } from '../../components/main/filters/topic-filter/topic-filter';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { QuestCard } from '../../components/main/quest-card/quest-card';
import { generateQuests } from '../../mock/quest-mock';

function Home(): JSX.Element {
  const quests = generateQuests();

  return (
    <div>
      <FirstComponent />
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle page-content__subtitle">
                квесты в Санкт-Петербурге
              </h1>
              <h2 className="title title--size-m page-content__title">
                Выберите тематику
              </h2>
            </div>
            <div className="page-content__item">
              <form className="filter" action="#" method="get">
                <TopicFilter />
                <ComplexityFilter />
              </form>
            </div>
            <h2 className="title visually-hidden">Выберите квест</h2>
            <div className="cards-grid">
              {quests.map((quest) => (
                <QuestCard key={quest.id} quest={quest} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export { Home };

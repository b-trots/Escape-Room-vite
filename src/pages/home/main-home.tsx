import { QuestCard } from '../../components/main/quest-card/quest-card';
import { generateQuests } from '../../mock/quest-mock';
import { Filters } from './filters';
import { Title } from './title';

function MainHome(): JSX.Element {
  const quests = generateQuests();

  return (
    <main className="page-content">
      <div className="container">
        <Title />
        <Filters />
        <h2 className="title visually-hidden">Выберите квест</h2>
        <div className="cards-grid">
          {quests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
        </div>
      </div>
    </main>
  );
}

export { MainHome };

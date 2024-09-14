import { QuestCard } from '../../components/main/quest-card/quest-card';
import { useAppSelector } from '../../hooks/store';
import { questSelectors } from '../../store/slices/quest-slice/quest-slice';
import { Filters } from './filters/filters';
import { Title } from './title';

function MainHome(): JSX.Element {
  const quests = useAppSelector(questSelectors.quests);
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

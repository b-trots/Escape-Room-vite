import { QuestCard } from '../../components/main/quest-card/quest-card';
import {
  FILTER_BY_COMPLEXITY,
  FILTER_BY_TOPIC,
  TitleName,
} from '../../const/template-const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { filteredQuests } from '../../store/slices/quest-slice/quest-selectors';
import {
  questActions, setActiveQuestId
} from '../../store/slices/quest-slice/quest-slice';
import { QuestPreview } from '../../types/quest';
import { Filters } from './filters/filters';
import { Title } from './title';

function MainHome(): JSX.Element {
  const quests = useAppSelector(filteredQuests);
  const { setFilterByTopic, setFilterByComplexity } = questActions;
  const dispatch = useAppDispatch();

  const handleMouseClick = (quest: QuestPreview) => {
    dispatch(setActiveQuestId(quest.id));
    dispatch(setFilterByTopic(FILTER_BY_TOPIC[0]));
    dispatch(setFilterByComplexity(FILTER_BY_COMPLEXITY[0]));
  };

  return (
    <main className="page-conte.nt">
      <div className="container">
        <Title />
        <Filters />
        <h2 className="title visually-hidden">{TitleName.Quest}</h2>
        <div className="cards-grid">
          {quests.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              onClick={() => handleMouseClick(quest)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export { MainHome };

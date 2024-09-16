import { FILTER_BY_COMPLEXITY, FILTER_BY_TOPIC } from '../const/template-const';
import { QuestPreview } from '../types/quest';
import {
  FilterByComplexityType,
  FilterByTopicType,
} from '../types/store-types/slices-types';

const filterTopic = (quests: QuestPreview[], filter: FilterByTopicType) => {
  if (filter === FILTER_BY_TOPIC[0]) {
    return quests;
  } else {
    return quests.filter((quest) => quest.type === filter);
  }
};

const filterComplexity = (
  quests: QuestPreview[],
  filter: FilterByComplexityType
) => {
  if (filter === FILTER_BY_COMPLEXITY[0]) {
    return quests;
  } else if (filter === FILTER_BY_COMPLEXITY[2]) {
    return quests.filter((quest) => quest.level === 'medium');
  } else {
    return quests.filter((quest) => quest.level === filter);
  }
};

export { filterTopic, filterComplexity };

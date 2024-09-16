import { createSelector } from '@reduxjs/toolkit';
import { questSelectors } from './quest-slice';
import { filterComplexity, filterTopic } from '../../../utils/filter-utils';

const filteredQuests = createSelector(
  questSelectors.quests,
  questSelectors.filterByTopic,
  questSelectors.filterByComplexity,
  (quests, filterByTopic, filterByComplexity) => {
    const filteredTopic = filterTopic(quests, filterByTopic);
    return filterComplexity(filteredTopic, filterByComplexity);
  }
);

export { filteredQuests };

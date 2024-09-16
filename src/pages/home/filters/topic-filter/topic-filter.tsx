import { useState } from 'react';
import { FILTER_BY_TOPIC, FilterName } from '../../../../const/template-const';
import { TopicFilterItem } from './topic-filter-item';
import { FilterByTopicType } from '../../../../types/store-types/slices-types';
import { useAppDispatch } from '../../../../hooks/store';
import { setFilterByTopic } from '../../../../store/slices/quest-slice/quest-slice';

function TopicFilter(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<FilterByTopicType>(FILTER_BY_TOPIC[0]);
  const dispatch = useAppDispatch();

  const onClick = (filter:FilterByTopicType) => {
    setActiveFilter(filter);
    dispatch(setFilterByTopic(filter));
  };

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{FilterName.Topic}</legend>
      <ul className="filter__list">
        {FILTER_BY_TOPIC.map((filter) => (
          <TopicFilterItem
            key={filter}
            filter={filter}
            activeFilter={activeFilter}
            onClick={onClick}
          />
        ))}
      </ul>
    </fieldset>
  );
}

export { TopicFilter };

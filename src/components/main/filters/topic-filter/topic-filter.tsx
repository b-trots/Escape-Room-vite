import { FILTER_BY_TOPIC } from '../../../../const';
import { TopicFilterItem } from './topic-filter-item';

function TopicFilter(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {FILTER_BY_TOPIC.map((filter) => (
          <TopicFilterItem key={filter} filter={filter} />
        ))}
      </ul>
    </fieldset>
  );
}

export { TopicFilter };

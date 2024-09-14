import { FILTER_BY_TOPIC, FilterName } from '../../../../const/template-const';
import { TopicFilterItem } from './topic-filter-item';

function TopicFilter(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{FilterName.Topic}</legend>
      <ul className="filter__list">
        {FILTER_BY_TOPIC.map((filter) => (
          <TopicFilterItem key={filter} filter={filter} />
        ))}
      </ul>
    </fieldset>
  );
}

export { TopicFilter };

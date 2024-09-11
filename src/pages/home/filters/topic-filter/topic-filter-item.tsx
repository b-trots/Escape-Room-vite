import { QuestType } from '../../../../const/const';
import { FilterTopicType } from '../../../../types/common';
import { getFilterParameters } from '../../../../utils/utils';

type TopicFilterItemParams = {
  filter: FilterTopicType;
};
function TopicFilterItem({ filter }: TopicFilterItemParams): JSX.Element {
  const { label, icon, iconSize } = getFilterParameters(filter, QuestType);

  return (
    <li key={filter} className="filter__item">
      <input type="radio" name="type" id={filter} />
      <label className="filter__label" htmlFor={filter}>
        <svg
          className="filter__icon"
          width={iconSize[0]}
          height={iconSize[1]}
          aria-hidden="true"
        >
          <use xlinkHref={`#icon-${icon}`} />
        </svg>
        <span className="filter__label-text">{label}</span>
      </label>
    </li>
  );
}

export { TopicFilterItem };

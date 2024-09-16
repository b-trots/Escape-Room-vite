import { QuestType } from '../../../../const/app-const';
import { FilterTopicKeysType } from '../../../../types/common';
import { FilterByTopicType } from '../../../../types/store-types/slices-types';
import { getFilterParameters } from '../../../../utils/utils';

type TopicFilterItemParams = {
  filter: FilterTopicKeysType;
  activeFilter: FilterByTopicType;
  onClick: (filter: FilterTopicKeysType) => void;
};
function TopicFilterItem({
  filter,
  activeFilter,
  onClick
}: TopicFilterItemParams): JSX.Element {
  const isActive = filter === activeFilter;
  const { label, icon, iconSize } = getFilterParameters(filter, QuestType);

  return (
    <li key={filter} className="filter__item">
      <input type="radio" name="type" id={filter} checked={isActive} onClick={()=>onClick(filter)}/>

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

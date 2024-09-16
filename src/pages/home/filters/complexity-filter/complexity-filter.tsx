import { useState } from 'react';
import {
  FilterName,
  FILTER_BY_COMPLEXITY,
  QuestLevel,
} from '../../../../const/template-const';
import { useAppDispatch } from '../../../../hooks/store';
import { setFilterByComplexity } from '../../../../store/slices/quest-slice/quest-slice';
import { FilterByComplexityType } from '../../../../types/store-types/slices-types';
import { getFilterParameters } from '../../../../utils/utils';

function ComplexityFilter(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<FilterByComplexityType>(
    FILTER_BY_COMPLEXITY[0]
  );
  const dispatch = useAppDispatch();

  const onClick = (filter: FilterByComplexityType) => {
    setActiveFilter(filter);
    dispatch(setFilterByComplexity(filter));
  };
  const isActive = (filter: FilterByComplexityType) => filter === activeFilter;

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{FilterName.Complexity}</legend>
      <ul className="filter__list">
        {FILTER_BY_COMPLEXITY.map((filter) => (
          <li key={filter} className="filter__item">
            <input
              type="radio"
              name="level"
              id={filter}
              checked={isActive(filter)}
              onClick={() => onClick(filter)}
            />
            <label className="filter__label" htmlFor={filter}>
              <span className="filter__label-text">
                {getFilterParameters(filter, QuestLevel)}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export { ComplexityFilter };

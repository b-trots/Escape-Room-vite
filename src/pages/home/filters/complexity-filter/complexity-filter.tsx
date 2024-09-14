import { FilterName, FILTER_BY_COMPLEXITY, QuestLevel } from '../../../../const/template-const';
import { getFilterParameters } from '../../../../utils/utils';


function ComplexityFilter(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{FilterName.Complexity}</legend>
      <ul className="filter__list">
        {FILTER_BY_COMPLEXITY.map((filter) => (
          <li key={filter} className="filter__item">
            <input type="radio" name="level" id={filter} />
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

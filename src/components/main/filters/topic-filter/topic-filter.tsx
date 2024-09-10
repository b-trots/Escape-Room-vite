import { FILTER_BY_TOPIC, QuestLevelIcon, QuestType } from '../../../../const';
import { getFilterParameters } from '../../../../utils/utils';

function TopicFilter(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {FILTER_BY_TOPIC.map((filter) => (
          <li key={filter} className="filter__item">
            <input type="radio" name="type" id={filter} defaultChecked />
            <label className="filter__label" htmlFor={filter}>
              <svg
                className="filter__icon"
                width={36}
                height={30}
                aria-hidden="true"
              >
                <use
                  xlinkHref={`#icon-${getFilterParameters(
                    filter,
                    QuestLevelIcon
                  )}`}
                />
              </svg>
              <span className="filter__label-text">
                {getFilterParameters(filter, QuestType)}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export { TopicFilter };

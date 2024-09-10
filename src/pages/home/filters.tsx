import { ComplexityFilter } from '../../components/main/filters/complexity-filter/complexity-filter';
import { TopicFilter } from '../../components/main/filters/topic-filter/topic-filter';

function Filters(): JSX.Element {
  return (
    <div className="page-content__item">
      <form className="filter" action="#" method="get">
        <TopicFilter />
        <ComplexityFilter />
      </form>
    </div>
  );
}

export { Filters };

import { SubTitleName, TitleName } from '../../const/template-const';

function Title(): JSX.Element {
  return (
    <div className="page-content__title-wrapper">
      <h1 className="subtitle page-content__subtitle">{SubTitleName.Home}</h1>
      <h2 className="title title--size-m page-content__title">
        {TitleName.Home}
      </h2>
    </div>
  );
}

export { Title };

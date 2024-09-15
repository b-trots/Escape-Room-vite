import { useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { SelectedInfo } from '../../const/template-const';
import { BookButton } from './book-button';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { ShowLoading } from '../../components/main/show-loading';
import { questSelectors } from '../../store/slices/quest-slice/quest-slice';
import { useEffect } from 'react';
import { questAction } from '../../store/api-actions/quest-actions';

function Quest(): JSX.Element {
  const { id = '' } = useParams();
  const quest = useAppSelector(questSelectors.quest);
  const currentId = quest?.id ?? '';
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentId !== id) {
      dispatch(questAction(id)).unwrap();
    }
  }, [id, dispatch, currentId]);

  if (!quest) {
    return <ShowLoading />;
  } else {
    const { title, type, level, description, peopleMinMax } = quest;
    return (
      <div>
        <FirstComponent />
        <div className="wrapper">
          <Header />
          <main className="decorated-page quest-page">
            <BackgroundDecoration />
            <div className="container container--size-l">
              <div className="quest-page__content">
                <h1 className="title title--size-l title--uppercase quest-page__title">
                  {title}
                </h1>
                <p className="subtitle quest-page__subtitle">
                  <span className="visually-hidden">{SelectedInfo.Genre}</span>
                  {type}
                </p>
                <ul className="tags tags--size-l quest-page__tags">
                  <li className="tags__item">
                    <svg width={11} height={14} aria-hidden="true">
                      <use xlinkHref="#icon-person" />
                    </svg>
                    {`${peopleMinMax[0]}–${peopleMinMax[1]} чел`}
                  </li>
                  <li className="tags__item">
                    <svg width={14} height={14} aria-hidden="true">
                      <use xlinkHref="#icon-level" />
                    </svg>
                    {level}
                  </li>
                </ul>
                <p className="quest-page__description">{description}</p>
                <BookButton id={id} />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export { Quest };

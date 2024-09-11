import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { BookButton } from '../../components/main/book-button';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { generateQuests } from '../../mock/quest-mock';
const quest = generateQuests()[0];

function Quest(): JSX.Element {
  const {title, type, level, description, peopleMinMax } = quest;
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
                <span className="visually-hidden">Жанр:</span>{type}
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
              <p className="quest-page__description">
                {description}
              </p>
              <BookButton />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export { Quest };

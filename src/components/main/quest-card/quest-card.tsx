import { QuestPreview } from '../../../types/quest';

type QuestCardProps = {
  quest: Pick<
    QuestPreview,
    'title' | 'previewImg' | 'previewImgWebp' | 'level' | 'peopleMinMax'
  >;
};

function QuestCard({ quest }: QuestCardProps): JSX.Element {
  const { title, previewImg, previewImgWebp, level, peopleMinMax } = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${previewImgWebp}, ${previewImgWebp}`}
          />
          <img
            src={previewImg}
            srcSet={previewImg}
            width={344}
            height={232}
            alt="Мужчина в клетке в подземелье."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="quest.html">
            {title}
          </a>
        </div>
        <ul className="tags quest-card__tags">
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
      </div>
    </div>
  );
}

export { QuestCard };

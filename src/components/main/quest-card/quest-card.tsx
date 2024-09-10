import { QuestPreview } from '../../../types/quest';

type QuestCardProps = {
  quest: Pick<
    QuestPreview,
    'title' | 'previewImg' | 'previewImgWebp' | 'level' | 'peopleMinMax'
  >;
  isMyQuests?: boolean;
};

function QuestCard({ quest, isMyQuests }: QuestCardProps): JSX.Element {
  const { title, previewImg, previewImgWebp, level, peopleMinMax } = quest;

  const showMoreInformation = () => isMyQuests ? `<span class="quest-card__info">${сегодня},&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br>м. Петроградская]</span>)` : '';

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

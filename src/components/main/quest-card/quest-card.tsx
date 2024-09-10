import { Quest } from '../../../types/quest';
import { ReservationType } from '../../../types/reservation';
import { correctTime } from '../../../utils/time-utils';
import { CancelButton } from './cancel-button';

type QuestCardProps = {
  quest: Pick<
    Quest,
    'title' | 'previewImg' | 'previewImgWebp' | 'level' | 'peopleMinMax'
  >;
  reservation?: Pick<
    ReservationType,
    'date' | 'time' | 'location' | 'peopleCount'
  >;
};

function QuestCard({ quest, reservation }: QuestCardProps): JSX.Element {
  const { title, previewImg, previewImgWebp, level, peopleMinMax } = quest;

  const showQuestInfo = () => {
    if (reservation) {
      const { date, time, location } = reservation;
      return (
        <span className="quest-card__info">
          {date}, {correctTime(time)}. {location?.address}
        </span>
      );
    }
  };

  const showPeopleCount = () =>
    reservation
      ? `${reservation.peopleCount} чел`
      : `${peopleMinMax[0]}–${peopleMinMax[1]} чел`;

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
          {showQuestInfo()}
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {showPeopleCount()}
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {level}
          </li>
        </ul>
        {reservation && <CancelButton />}
      </div>
    </div>
  );
}

export { QuestCard };

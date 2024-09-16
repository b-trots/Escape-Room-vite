import { Link } from 'react-router-dom';
import { QuestPreview } from '../../../types/quest';
import { correctTime } from '../../../utils/time-utils';
import { CancelButton } from './cancel-button';
import { AppRoute } from '../../../const/app-const';
import { ReservationPreview } from '../../../types/reservation';

type QuestCardProps = {
  quest: QuestPreview;
  reservation?:ReservationPreview;
  onClick: (quest: QuestPreview) => void;
};

function QuestCard({
  quest,
  reservation,
  onClick,
}: QuestCardProps): JSX.Element {
  const { id, title, previewImg, previewImgWebp, level, peopleMinMax } = quest;

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
          <Link
            className="quest-card__link"
            to={AppRoute.Quest.replace(':id', id)}
            onClick={() => onClick(quest)}
          >
            {title}
          </Link>
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

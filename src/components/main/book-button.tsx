import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function BookButton(): JSX.Element {
  return (
    <Link
      to={AppRoute.Booking}
      className="btn btn--accent btn--cta quest-page__btn"
    >
      Забронировать
    </Link>
  );
}

export { BookButton };

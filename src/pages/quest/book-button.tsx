import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { ActionButton } from '../../const/app-const';

function BookButton(): JSX.Element {
  return (
    <Link
      to={AppRoute.Booking}
      className="btn btn--accent btn--cta quest-page__btn"
    >
      {ActionButton.Booking}
    </Link>
  );
}

export { BookButton };

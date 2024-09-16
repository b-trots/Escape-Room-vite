import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-const';
import { ActionButton } from '../../const/template-const';
import { dispatch } from '../../store/store';
import { bookingInfoAction } from '../../store/api-actions/booking-actions';

type BookButtonProps = {
  id: string;
};
function BookButton({ id }: BookButtonProps): JSX.Element {
  const handleMouseClick = () => dispatch(bookingInfoAction(id));
  return (
    <Link
      to={AppRoute.Booking.replace(':id', id)}
      className="btn btn--accent btn--cta quest-page__btn"
      onClick={handleMouseClick}
    >
      {ActionButton.Booking}
    </Link>
  );
}

export { BookButton };

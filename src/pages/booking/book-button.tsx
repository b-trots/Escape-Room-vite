import { ActionButton } from '../../const/template-const';

function BookButton(): JSX.Element {
  return (
    <button
      className="btn btn--accent btn--cta booking-form__submit"
      type="submit"
    >
      {ActionButton.Booking}
    </button>
  );
}

export { BookButton };

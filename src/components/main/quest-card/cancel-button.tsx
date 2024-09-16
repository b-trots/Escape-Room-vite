import { ActionButton } from '../../../const/template-const';

function CancelButton(): JSX.Element {
  return (
    <button
      className="btn btn--accent btn--secondary quest-card__btn"
      type="button"
    >
      {ActionButton.Cancel}
    </button>
  );
}

export { CancelButton };

import { ActionButton } from '../../../const/template-const';

type CancelButtonProps = {
  onClick: () => void;
};
function CancelButton({ onClick }: CancelButtonProps): JSX.Element {
  return (
    <button
      className="btn btn--accent btn--secondary quest-card__btn"
      type="button"
      onClick={onClick}
    >
      {ActionButton.Cancel}
    </button>
  );
}

export { CancelButton };

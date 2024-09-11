import { Checkbox } from '../../const/app-const';

function ChildrenCheckbox(): JSX.Element {
  return (
    <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
      <input type="checkbox" id="children" name="children" defaultChecked />
      <span className="custom-checkbox__icon">
        <svg width={20} height={17} aria-hidden="true">
          <use xlinkHref="#icon-tick" />
        </svg>
      </span>
      <span className="custom-checkbox__label">{Checkbox.Children}</span>
    </label>
  );
}

export { ChildrenCheckbox };

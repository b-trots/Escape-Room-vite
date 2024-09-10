function PrivacyPolicy(): JSX.Element {
  return (
    <label className="custom-checkbox login-form__checkbox">
      <input
        type="checkbox"
        id="id-order-agreement"
        name="user-agreement"
        required
      />
      <span className="custom-checkbox__icon">
        <svg width={20} height={17} aria-hidden="true">
          <use xlinkHref="#icon-tick" />
        </svg>
      </span>
      <span className="custom-checkbox__label">
        Я&nbsp;согласен с
        <a className="link link--active-silver link--underlined" href="#">
          правилами обработки персональных данных
        </a>
        &nbsp;и пользовательским соглашением
      </span>
    </label>
  );
}

export { PrivacyPolicy };

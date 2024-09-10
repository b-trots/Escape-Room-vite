import { PrivacyPolicy } from './privacy-policy';

function LoginForm(): JSX.Element {
  return (
    <form
      className="login-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">
              E&nbsp;–&nbsp;mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Адрес электронной почты"
              required
            />
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              required
            />
          </div>
        </div>
        <button
          className="btn btn--accent btn--general login-form__submit"
          type="submit"
        >
          Войти
        </button>
      </div>
      <PrivacyPolicy />
    </form>
  );
}

export { LoginForm };

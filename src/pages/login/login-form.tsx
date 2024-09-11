import {
  ActionButton,
  PrivacyPolicyClass,
  TitleName,
} from '../../const/app-const';
import { UserDataForLogin } from '../../const/const-for-user';
import { UserDataLoginType } from '../../types/common';
import { UserData } from '../booking/user-data-to-booking';
import { PrivacyPolicy } from './privacy-policy';

function LoginForm(): JSX.Element {
  return (
    <form
      className="login-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">
          {TitleName.Login}
        </h1>
        <div className="login-form__inputs">
          {Object.keys(UserDataForLogin).map((field) => (
            <UserData field={field as UserDataLoginType} />
          ))}
        </div>

        <button
          className="btn btn--accent btn--general login-form__submit"
          type="submit"
        >
          {ActionButton.Login}
        </button>
      </div>
      <PrivacyPolicy className={PrivacyPolicyClass.Login} />
    </form>
  );
}

export { LoginForm };


import { PrivacyPolicy } from '../../components/main/private-policy/privacy-policy';
import { TitleName, UserDataForLogin, ActionButton, PrivacyPolicyClass } from '../../const/template-const';
import { UserDataLoginType } from '../../types/common';
import { UserData } from '../booking/user-data-to-booking';

function LoginForm(): JSX.Element {
  const onSubmit = (evt) => evt.preventDefault();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  return (
    <form
      className="login-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">
          {TitleName.Login}
        </h1>
        <div className="login-form__inputs">
          {Object.keys(UserDataForLogin).map((field) => (
            <UserData key={field} register={register} field={field as UserDataLoginType} />
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

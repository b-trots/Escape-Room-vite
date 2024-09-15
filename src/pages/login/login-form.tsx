import { useForm } from 'react-hook-form';
import { PrivacyPolicy } from '../../components/main/private-policy/privacy-policy';
import {
  TitleName,
  UserDataForLogin,
  ActionButton,
  PrivacyPolicyClass,
} from '../../const/template-const';
import { UserDataLoginType } from '../../types/common';
import { UserData } from '../booking/user-data-to-booking';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/app-const';
import { loginAction } from '../../store/api-actions/user-actions';
import { store } from '../../store/store';

export type Inputs = {
  [key: string]: string;
};

function LoginForm(): JSX.Element {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit= () => {
    store
      .dispatch(
        loginAction({
          login: watch().email,
          password: watch().password,
        })
      )
      .unwrap(),
      {
        loading: 'Logging in...',
        error: 'Login failed',
        success: 'Logged in successfully',
      };
  };

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
            <UserData
              key={field}
              errors={errors}
              register={register}
              field={field as UserDataLoginType}
            />
          ))}
        </div>

        <button
          className="btn btn--accent btn--general login-form__submit"
          type="submit"
          onSubmit={() => navigate(AppRoute.Home)}
        >
          {ActionButton.Login}
        </button>
      </div>
      <PrivacyPolicy className={PrivacyPolicyClass.Login} />
    </form>
  );
}

export { LoginForm };

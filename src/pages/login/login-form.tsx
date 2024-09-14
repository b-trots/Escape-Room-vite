import { SubmitHandler, useForm } from 'react-hook-form';
import { PrivacyPolicy } from '../../components/main/private-policy/privacy-policy';
import {
  TitleName,
  UserDataForLogin,
  ActionButton,
  PrivacyPolicyClass,
} from '../../const/template-const';
import { UserDataLoginType } from '../../types/common';
import { UserData } from '../booking/user-data-to-booking';

export type Inputs = {
  [key: string]: string;
};

function LoginForm(): JSX.Element {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
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
        >
          {ActionButton.Login}
        </button>
      </div>
      <PrivacyPolicy className={PrivacyPolicyClass.Login} />
    </form>
  );
}

export { LoginForm };

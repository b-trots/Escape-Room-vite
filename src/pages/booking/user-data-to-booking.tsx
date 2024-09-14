import { UserDataForBooking, UserDataForLogin } from '../../const/template-const';
import { UserDataFieldType } from '../../types/common';

type UserDataProps = {
  field: UserDataFieldType;
};

function UserData({ field }: UserDataProps): JSX.Element {
  const userData = Object.keys(UserDataForBooking).includes(field)
    ? UserDataForBooking
    : UserDataForLogin;

  const { name, label, type, id, pattern, placeholder } =
    userData[field as keyof typeof userData];

  return (
    <div className="custom-input booking-form__input">
      <label className="custom-input__label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        required
      />
    </div>
  );
}

export { UserData };

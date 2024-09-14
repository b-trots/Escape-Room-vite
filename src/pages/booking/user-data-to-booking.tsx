import { FieldValues, UseFormRegister } from 'react-hook-form';
import { UserDataForBooking, UserDataForLogin } from '../../const/template-const';
import { UserDataFieldType } from '../../types/common';
import { toBigLetter } from '../../utils/utils';

type UserDataProps = {
  field: UserDataFieldType;
  register:UseFormRegister<FieldValues>;

};

function UserData({ field,register }: UserDataProps): JSX.Element {
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
        {...register(`user${toBigLetter(id)}`, { required: true })}
      />
    </div>
  );
}

export { UserData };

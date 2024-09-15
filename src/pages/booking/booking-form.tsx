import { useForm } from 'react-hook-form';
import { PrivacyPolicy } from '../../components/main/private-policy/privacy-policy';
import {
  LegendName,
  UserDataForBooking,
  PrivacyPolicyClass,
  ActionButton,
  Checkbox,
} from '../../const/template-const';
import { store } from '../../store/store';
import { BookingType } from '../../types/booking';
import { UserDataBookingType } from '../../types/common';
import { ChildrenCheckbox } from './children-checkbox';
import { UserData } from './form-data';
import { TimeSlotsList } from './time-slots-list';
import { FormButton } from './form-button';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/app-const';
import { bookingAction } from '../../store/api-actions/booking-actions';
import { useAppSelector } from '../../hooks/store';
import { questSelectors } from '../../store/slices/quest-slice/quest-slice';
import { useRef, useState } from 'react';

type BookingFormProps = {
  location: BookingType;
};

type Inputs = {
  [key: string]: string;
};

function BookingForm({ location }: BookingFormProps): JSX.Element {
  const quest = useAppSelector(questSelectors.quest);
  const navigate = useNavigate();
  const { slots } = location;

  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onClick = () => setChildren(!children);

const[children, setChildren] = useState(false);


  const INITIAL = {
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    person: 0,
    placeId: '',
  };

  const [bookingForm, setBookingForm] = useState(INITIAL);

  const handleFormInput = (evt: any) => {
    const name = evt.target.name;
    let value = evt.target.value;

    setBookingForm({ ...bookingForm, [name]: value });
  };
const onClickl=()=>console.log(bookingForm);

  const onSubmit = () => {
    // store
    //   .dispatch(
    //     bookingAction({
    //       questId: quest!.id,
    //       bookingInfo: watch(),
    //     })
    //   )
    //   .unwrap(),
    //   {
    //     loading: 'Logging in...',
    //     error: 'Login failed',
    //     success: 'Logged in successfully',
    //   };
    navigate(AppRoute.MyQuests);
  };

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      ref={formRef}
      onInput={handleFormInput}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">{LegendName.SelectDate}</legend>
        <TimeSlotsList slots={slots} />
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">{LegendName.ContactInfo}</legend>
        {Object.keys(UserDataForBooking).map((field) => (
          <UserData
            key={field}
            field={field as UserDataBookingType}
            errors={errors}
            register={register}
          />
        ))}

<label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
      <input type="checkbox" id="children" name="children" onClick={onClick} checked={children}/>
      <span className="custom-checkbox__icon">
        <svg width={20} height={17} aria-hidden="true">
          <use xlinkHref="#icon-tick" />
        </svg>
      </span>
      <span className="custom-checkbox__label">{Checkbox.Children}</span>
    </label>
      </fieldset>
      <FormButton
        onClick={onClickl}
        bemBlock={'btn--cta booking-form__submit'}
        name={ActionButton.Booking}
      />
      <PrivacyPolicy className={PrivacyPolicyClass.Booking} />
    </form>
  );
}

export { BookingForm };

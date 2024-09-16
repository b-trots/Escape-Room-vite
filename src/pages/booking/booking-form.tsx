import { useForm } from 'react-hook-form';
import { PrivacyPolicy } from '../../components/main/private-policy/privacy-policy';
import {
  LegendName,
  UserDataForBooking,
  PrivacyPolicyClass,
  ActionButton,
  Checkbox,
} from '../../const/template-const';
import { BookingType } from '../../types/booking';
import { UserDataBookingType } from '../../types/common';
import { UserData } from './form-data';
import { TimeSlotsList } from './time-slots-list';
import { FormButton } from './form-button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import { questSelectors } from '../../store/slices/quest-slice/quest-slice';
import { useRef, useState } from 'react';
import { ChildrenCheckbox } from './children-checkbox';
import { store } from '../../store/store';
import { bookingAction } from '../../store/api-actions/booking-actions';

type BookingFormProps = {
  location: BookingType;
};

export type BookingInputsType = {
  time: string;
  name: string;
  tel: string;
  person: number;
};

function BookingForm({ location }: BookingFormProps): JSX.Element {
  const questId = useAppSelector(questSelectors.activeQuestId);
  const { slots } = location;

  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingInputsType>();

  const [isChildrenChecked, setIsChildrenChecked] = useState(true);
  const onCheckboxChange = () => {
    setIsChildrenChecked(!isChildrenChecked);
  };

  const onSubmit = async () => {
    const inCorrectTime = watch('time').slice(watch('time').length - 6);
    const parsedTime = inCorrectTime.split(/(\d+)/);
    const correctTime = `${parsedTime[1]}:${parsedTime[3]}`;

    const correctDate = watch('time').slice(
      0,
      watch('time').length - inCorrectTime.length
    );

    const bookingInfo = {
      date: correctDate,
      time: correctTime,
      contactPerson: watch('name'),
      phone: 'tel',
      withChildren: isChildrenChecked,
      peopleCount: Number(watch('person')),
      placeId: location.id,
    };

    console.log(bookingInfo);
    return (
      store.dispatch(bookingAction({ questId, bookingInfo })).unwrap(),
      {
        loading: 'Logging in...',
        error: 'Login failed',
        success: 'Logged in successfully',
      }
    );
    // navigate(AppRoute.MyQuests);
  };

  // const handleFormSubmit = (evt:React.FormEvent) => {
  //   evt.preventDefault();
  //   handleSubmit(onSubmit);
  // };

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">{LegendName.SelectDate}</legend>
        <TimeSlotsList slots={slots} register={register} />
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
          <ChildrenCheckbox
            onChange={onCheckboxChange}
            isChildrenChecked={isChildrenChecked}
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">{Checkbox.Children}</span>
        </label>
      </fieldset>
      <FormButton
        bemBlock={'btn--cta booking-form__submit'}
        name={ActionButton.Booking}
      />
      <PrivacyPolicy className={PrivacyPolicyClass.Booking} />
    </form>
  );
}

export { BookingForm };

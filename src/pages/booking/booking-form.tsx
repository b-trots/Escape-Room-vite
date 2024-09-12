import { PrivacyPolicy } from '../../components/main/private-policy/privacy-policy';
import { LegendName, PrivacyPolicyClass } from '../../const/app-const';
import { UserDataForBooking } from '../../const/const-for-user';
import { DaySlots } from '../../types/booking';
import { UserDataBookingType } from '../../types/common';
import { BookButton } from './book-button';
import { ChildrenCheckbox } from './children-checkbox';
import { TimeSlotsList } from './time-slots-list';
import { UserData } from './user-data-to-booking';

type BookingFormProps = {
  slots: DaySlots;
};

function BookingForm({ slots }: BookingFormProps): JSX.Element {
  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">{LegendName.SelectDate}</legend>
        <TimeSlotsList slots={slots} />
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">{LegendName.ContactInfo}</legend>
        {Object.keys(UserDataForBooking).map((field) => (
          <UserData key={field} field={field as UserDataBookingType} />
        ))}

        <ChildrenCheckbox />
      </fieldset>
      <BookButton />
      <PrivacyPolicy className={PrivacyPolicyClass.Booking} />
    </form>
  );
}

export { BookingForm };

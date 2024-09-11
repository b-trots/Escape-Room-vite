import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { FirstComponent } from '../../components/main/first-component/first-component';
import {
  LegendName,
  PrivacyPolicyClass,
  SelectedInfo, TitleName
} from '../../const/app-const';
import { UserDataForBooking } from '../../const/const-for-user';
import { generateBooking } from '../../mock/booking-mock';
import { generateQuests } from '../../mock/quest-mock';
import { UserDataBookingType } from '../../types/common';
import { PrivacyPolicy } from '../login/privacy-policy';
import { BookButton } from './book-button';
import { ChildrenCheckbox } from './children-checkbox';
import { TimeSlotsList } from './time-slots-list';
import { UserData } from './user-data-to-booking';

function Booking(): JSX.Element {
  const quest = generateQuests()[0];
  const booking = generateBooking()[0];
  const { title } = quest;
  const { location, slots } = booking;

  return (
    <>
      <FirstComponent />
      <div className="wrapper">
        <Header />
        <main className="page-content decorated-page">
          <BackgroundDecoration />
          <div className="container container--size-s">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle subtitle--size-l page-content__subtitle">
                {TitleName.Booking}
              </h1>
              <p className="title title--size-m title--uppercase page-content__title">
                {title}
              </p>
            </div>
            <div className="page-content__item">
              <div className="booking-map">
                <div className="map">
                  <div className="map__container" />
                </div>
                <p className="booking-map__address">
                  {SelectedInfo.Address}
                  {location.address}
                </p>
              </div>
            </div>
            <form
              className="booking-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
            >
              <fieldset className="booking-form__section">
                <legend className="visually-hidden">
                  {LegendName.SelectDate}
                </legend>
                <TimeSlotsList slots={slots} />
              </fieldset>
              <fieldset className="booking-form__section">
                <legend className="visually-hidden">
                  {LegendName.Contact}
                </legend>
                {Object.keys(UserDataForBooking).map((field) => (
                  <UserData field={field as UserDataBookingType} />
                ))}

                <ChildrenCheckbox />
              </fieldset>
              <BookButton />
              <PrivacyPolicy className={PrivacyPolicyClass.Booking} />
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export { Booking };

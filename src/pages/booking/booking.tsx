import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { generateBooking } from '../../mock/booking-mock';
import { generateQuests } from '../../mock/quest-mock';
import { TimeSlot } from './time-slot';
import { TimeSlotsList } from './time-slots-list';

function Booking(): JSX.Element {
  const quest = generateQuests()[0];
  const booking = generateBooking()[0];
  const { title } = quest;
  const { location, slots } = booking;

  console.log(booking);

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
                Бронирование квеста
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
                  Вы&nbsp;выбрали: {location.address}
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
                  Выбор даты и времени
                </legend>
                <TimeSlotsList slots={slots} />
              </fieldset>
              <fieldset className="booking-form__section">
                <legend className="visually-hidden">
                  Контактная информация
                </legend>
                <div className="custom-input booking-form__input">
                  <label className="custom-input__label" htmlFor="name">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Имя"
                    // required="required"
                    pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
                  />
                </div>
                <div className="custom-input booking-form__input">
                  <label className="custom-input__label" htmlFor="tel">
                    Контактный телефон
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Телефон"
                    // required="required"
                    pattern="[0-9]{10,}"
                  />
                </div>
                <div className="custom-input booking-form__input">
                  <label className="custom-input__label" htmlFor="person">
                    Количество участников
                  </label>
                  <input
                    type="number"
                    id="person"
                    name="person"
                    placeholder="Количество участников"
                    // required="required"
                  />
                </div>
                <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                  <input
                    type="checkbox"
                    id="children"
                    name="children"
                    defaultChecked
                  />
                  <span className="custom-checkbox__icon">
                    <svg width={20} height={17} aria-hidden="true">
                      <use xlinkHref="#icon-tick" />
                    </svg>
                  </span>
                  <span className="custom-checkbox__label">
                    Со&nbsp;мной будут дети
                  </span>
                </label>
              </fieldset>
              <button
                className="btn btn--accent btn--cta booking-form__submit"
                type="submit"
              >
                Забронировать
              </button>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
                  required
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Я&nbsp;согласен с
                  <a
                    className="link link--active-silver link--underlined"
                    href="#"
                  >
                    правилами обработки персональных данных
                  </a>
                  &nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export { Booking };

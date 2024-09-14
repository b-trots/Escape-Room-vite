import { useState } from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { TitleName } from '../../const/template-const';
import { BookingForm } from './booking-form';

function Booking(): JSX.Element {
  const currentBooking = booking[0];
  const { title } = quest;
  const { slots } = currentBooking;

  const [activeId, setActiveId] = useState('');

  const handlePlaceSelect = (bookingId: string) => {
    setActiveId(bookingId);
  };

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
              <Map
                bemBlock="booking-"
                booking={booking}
                currentBooking={currentBooking}
                onClick={handlePlaceSelect}
              />
            </div>
            <BookingForm slots={slots} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export { Booking };

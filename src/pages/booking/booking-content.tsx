import { useState } from 'react';
import { BemBlock, TitleName } from '../../const/template-const';
import { BookingType } from '../../types/booking';
import { Quest } from '../../types/quest';
import { Map } from '../../components/map/map';
import { BookingForm } from './booking-form';

type SelectedAddressProps = {
  quest: Quest;
  booking: BookingType[];
};
function BookingContent({ quest, booking}: SelectedAddressProps): JSX.Element {

  const { title } = quest;
  const [activePlace, setActivePlace] = useState(booking[0]);

  const handlePlaceSelect = (place: BookingType) => {
    setActivePlace(place);
  };

  return (
    <>
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
          bemBlock={BemBlock.Map.Booking}
          activeBooking={activePlace}
          onClick={handlePlaceSelect}
        />
      </div>
      <BookingForm location={activePlace} />
    </>
  );
}

export { BookingContent };

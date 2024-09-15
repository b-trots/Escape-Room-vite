import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  adaptLocation,
  useUpdateLocation,
  useUpdateMarkers,
} from './map-utils';
import { useMap } from './use-map';
import { BookingType, Coords } from '../../types/booking';
import { useAppSelector } from '../../hooks/store';
import { bookingSelectors } from '../../store/slices/booking-slice/booking-slice';
import { BemBlock } from '../../const/template-const';

export type MapProps = {
  bemBlock: string;
  activeBooking?: BookingType;
  onClick?: (place:BookingType) => void;
};

function Map({ bemBlock, activeBooking, onClick }: MapProps) {
  console.log(activeBooking);
  const isBooking = bemBlock === BemBlock.Map.Booking;
  const booking = useAppSelector(bookingSelectors.bookingInfo);
  // let coords = OrganizationContact.Coords;
  // let address = '';
  // if (isBooking){
  const coords = activeBooking?.location.coords as Coords;
  const address = activeBooking?.location.address as string;
  // }
  const currentLocation = adaptLocation(coords);
  const mapRef = useRef(null);
  const map = useMap({ mapRef, currentLocation, bemBlock });

  useUpdateLocation(map, currentLocation);
  useUpdateMarkers(map, booking, activeBooking, onClick, bemBlock, coords);

  return (
    <div className={`${bemBlock}map`}>
      <div className="map">
        <div className="map__container" ref={mapRef} />
      </div>
      {/* {isBooking && <SelectedAddress address={address} />} */}
    </div>
  );
}

export { Map };

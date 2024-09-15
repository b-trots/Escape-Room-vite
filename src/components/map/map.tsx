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
import { BemBlock, OrganizationContact } from '../../const/template-const';
import { SelectedAddress } from '../../pages/booking/selected-address';

export type MapProps = {
  bemBlock: string;
  activeBooking?: BookingType;
  onClick?: (place: BookingType) => void;
};

function Map({ bemBlock, activeBooking, onClick }: MapProps) {
  const isBooking = bemBlock === BemBlock.Map.Booking;
  const booking = useAppSelector(bookingSelectors.bookingInfo);

  const coords = isBooking
    ? (activeBooking?.location.coords as Coords)
    : (OrganizationContact.Coords as Coords);

  const address = isBooking ? (activeBooking?.location.address as string) : '';

  const currentLocation = adaptLocation(coords);
  const mapRef = useRef(null);
  const map = useMap({ mapRef, currentLocation, bemBlock });

  useUpdateLocation(map, currentLocation);
  useUpdateMarkers(
    map,
    booking,
    activeBooking,
    onClick,
    bemBlock,
    coords
  );

  return (
    <div className={`${bemBlock}map`}>
      <div className="map">
        <div className="map__container" ref={mapRef} />
      </div>
      {isBooking && <SelectedAddress address={address} />}
    </div>
  );
}

export { Map };

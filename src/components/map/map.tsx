import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  adaptLocation,
  useUpdateLocation,
  useUpdateMarkers,
} from './map-utils';
import { useMap } from './use-map';
import { SelectedAddress } from '../../pages/booking/selected-address';
import { Booking } from '../../types/booking';

export type MapProps = {
  bemBlock: string;
  booking:Booking[];
  currentBooking: Booking;
  onClick: (bookingId: string) => void;
};

function Map({ bemBlock, booking, currentBooking, onClick }: MapProps) {
  const {location} = currentBooking;
  const { address, coords } = location;
  const isBooking = () => bemBlock === 'booking';

  // const location = (activeOffer ? activeOffer : offers[offers.length / 2])
  //   .location;
  const currentLocation = adaptLocation(coords);
  const mapRef = useRef(null);
  const map = useMap({ mapRef, currentLocation });

  useUpdateLocation(map, currentLocation);
  useUpdateMarkers(map, booking, currentBooking, onClick);

  return (
    <div className={`${bemBlock}map`}>
      <div className="map">
        <div className="map__container" ref={mapRef} />
      </div>
      {isBooking() && <SelectedAddress address={address} />}
    </div>
  );
}

export { Map };

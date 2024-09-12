import { useEffect } from 'react';
import { Icon, Map as LeafletMap, Marker, layerGroup } from 'leaflet';
import { Booking, Coords } from '../../types/booking';
import { MapSetting } from '../../const/app-const';

export type Location = {
  lat: number;
  lng: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: MapSetting.Markers.DefaultMarker,
  iconSize: [27, 40],
  iconAnchor: [15, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: MapSetting.Markers.ActiveMarker,
  iconSize: [27, 40],
  iconAnchor: [15, 40],
});

// const getLocation = (offers: FullOffer[]) => offers[0].city.location;

const adaptLocation = ([lat, lng]: Coords) => ({
  lat,
  lng,
  zoom: MapSetting.Zoom,
});

const useUpdateLocation = (map: LeafletMap | null, location: Location) => {
  useEffect(() => {
    if (map) {
      map.setView(location);
      const markerLayer = layerGroup().addTo(map);
      map.removeLayer(markerLayer);
    }
  });
};

const useUpdateMarkers = (
  map: LeafletMap | null,
  booking: Booking[],
  currentBooking: Booking,
  onClick: (bookingId: string) => void
) => {
  // const activeOfferId = useAppSelector(activeSelectors.activeOfferId);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      booking.forEach((item) => {
        const marker = new Marker({
          lat: item.location.coords[0],
          lng: item.location.coords[1],
        }).on('click', () => onClick(item.id));

        marker
          .setIcon(
            currentBooking.id !== undefined && item.id === currentBooking.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, booking]);
};

export { adaptLocation, useUpdateLocation, useUpdateMarkers };

import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import type { Location } from './map-utils';
import { MapSetting } from '../../const/app-const';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  currentLocation: Location & { zoom: number };
};

function useMap({mapRef, currentLocation}: UseMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: currentLocation.lat,
          lng: currentLocation.lng,
        },
        zoom: currentLocation.zoom,
      });

      const layer = new TileLayer(MapSetting.MapUrl, {
        attribution: MapSetting.MapCopyright,
      });
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentLocation]);

  return map;
}

export { useMap };

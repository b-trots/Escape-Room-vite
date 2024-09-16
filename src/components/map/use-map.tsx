import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import type { Location } from './map-utils';
import { MapSetting } from '../../const/app-const';
import { interactionOptions } from '../../const/app-setting-const';
import { BemBlock } from '../../const/template-const';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  currentLocation: Location & { zoom: number };
  bemBlock: string;
};

function useMap({
  mapRef,
  currentLocation,
  bemBlock,
}: UseMapProps): Map | null {
  const [options] = useState<Record<string, unknown>>(() => {
    if (bemBlock === BemBlock.Map.Contacts) {
      return interactionOptions;
    }
    return {};
  });

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
        ...options,
      });

      const layer = new TileLayer(MapSetting.MapUrl, {
        attribution: MapSetting.MapCopyright,
      });
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentLocation, options]);

  return map;
}

export { useMap };

interface Slot {
  time: string;
  isAvailable: boolean;
}

interface DaySlots {
  [key: string]: Slot[];
}

type Coords = [number, number];
interface Location {
  address: string;
  coords: Coords;
}

interface BookingType {
  id: string;
  location: Location;
  slots: DaySlots;
}

interface NewBooking {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type { Coords, Slot, Location, DaySlots, BookingType, NewBooking };

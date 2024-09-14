import { QUEST_DATE } from '../const/app-const';


type QuestDays = (typeof QUEST_DATE)[number];

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

interface Booking {
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

export type {
  Coords,
  Slot,
  Location,
  DaySlots,
  QuestDays,
  Booking,
  NewBooking,
};

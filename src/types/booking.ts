import { QuestDate } from '../const';

type QuestDateType = keyof typeof QuestDate;

interface TimeInterval {
  time: string;
  isAvailable: boolean;
}

interface Slot {
  [key: string]: TimeInterval[];
}

interface Location {
  address: string;
  coords: number[];
}

interface Booking {
  id: string;
  location: Location;
  slots: {
    [key: string]: Slot[];
  };
}

interface NewBooking {
  date: QuestDateType;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type { QuestDateType, Booking, NewBooking };

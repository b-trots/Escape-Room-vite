import { QUEST_DATE, QuestDate } from '../const';

type QuestDate = typeof QUEST_DATE;

interface Slot {
  time: string;
  isAvailable: boolean;
}

interface DaySlots{
  today: Slot[];
  tomorrow: Slot[];
}

interface Location {
  address: string;
  coords: number[];
}

interface Booking {
  id: string;
  location: Location;
  slots:DaySlots;
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

export type { Slot, DaySlots, QuestDateType, Booking, NewBooking };

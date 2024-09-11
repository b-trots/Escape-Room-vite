import { QUEST_DATE, QuestDate } from '../const/const';

type QuestDays = (typeof QUEST_DATE)[number];
type QuestDateType = keyof typeof QuestDate;

interface Slot {
  time: string;
  isAvailable: boolean;
}

interface DaySlots {
  [key: string]: Slot[];
}

interface Location {
  address: string;
  coords: number[];
}

interface Booking {
  id: string;
  location: Location;
  slots: DaySlots;
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

export type { Slot, DaySlots, QuestDays, QuestDateType, Booking, NewBooking };

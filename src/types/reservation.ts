import { Quest } from './quest';

type DateType = 'сегодня' | 'завтра';

type LocationType = {
  address: string;
  coords: number[];
};

type ReservationPreview = Pick<
  ReservationType,
  'date' | 'time' | 'location' | 'peopleCount'
>;

interface ReservationType {
  date: DateType;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: LocationType;
  quest: Omit<Quest, 'description' | 'coverImg' | 'coverImgWebp'>;
}

export type { DateType, LocationType, ReservationType, ReservationPreview };

import { QuestDateType } from './booking';
import { QuestLevelType, QuestTypeType } from './quest';

interface Reservation {
  date: QuestDateType;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  quest: {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: QuestLevelType;
    type: QuestTypeType;
    peopleMinMax: number[];
  };
}

export type { Reservation };

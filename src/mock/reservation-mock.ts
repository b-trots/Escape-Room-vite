import { Reservation } from '../types/reservation';


const function mockReservation(): Reservation{


  return {

    date: faker.helpers.arrayElement(Object.values(QuestLevel))
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
}


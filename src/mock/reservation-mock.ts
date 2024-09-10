import { faker } from '@faker-js/faker';
import { QUESTS, QuestDate, QuestLevel, QuestType, Setting } from '../const';
import { ReservationType } from '../types/reservation';
import { ADDRESS } from './const';

function mockReservation(): ReservationType {
  const title = faker.helpers.arrayElement(QUESTS);

  return {
    date: faker.helpers.arrayElement(Object.values(QuestDate)),
    time: faker.date
      .between({
        from: '2024-09-10T00:00:00.000Z',
        to: '2024-09-11T00:00:00.000Z',
      })
      .toISOString(),
    contactPerson: faker.internet.userName(),
    phone: faker.phone.number(),
    withChildren: faker.datatype.boolean(),
    peopleCount: faker.number.int({ max: 10, min: 1 }),
    id: crypto.randomUUID(),
    location: {
      address: faker.helpers.arrayElement(ADDRESS),
      coords: [faker.location.latitude(), faker.location.longitude()],
    },
    quest: {
      id: crypto.randomUUID(),
      title,
      previewImg: faker.image.urlLoremFlickr({ category: title }),
      previewImgWebp: faker.image.urlLoremFlickr({ category: title }),
      level: faker.helpers.arrayElement(
        Object.values(QuestLevel)
      ) as QuestLevel,
      type: faker.helpers.arrayElement(Object.values(QuestType)),
      peopleMinMax: Array.from({ length: 2 }, () =>
        faker.number.int({ max: 10, min: 1 })
      ),
    },
  };
}

const generateReservations = () =>
  Array.from({ length: Setting.QuestsCount }, mockReservation);

export { generateReservations };

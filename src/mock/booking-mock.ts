import { faker } from '@faker-js/faker';
import { Booking } from '../types/booking';
import { ADDRESS } from './const';

function mockQuest(): Booking {
  const generateTimeInterval = () => ({
    time: faker.date
      .between({
        from: '2024-09-10T00:00:00.000Z',
        to: '2024-09-11T00:00:00.000Z',
      })
      .toISOString()
      .slice(11, 16),
    isAvailable: faker.datatype.boolean(),
  });


  return {
    id: crypto.randomUUID(),
    location: {
      address: faker.helpers.arrayElement(ADDRESS),
      coords: [faker.location.latitude(), faker.location.longitude()],
    },
    slots: {
      today: Array.from({ length: 4 }, generateTimeInterval),
      tomorrow: Array.from({ length: 4 }, generateTimeInterval),
    },
  };
}

const generateBooking = () => Array.from({ length: 5 }, mockQuest);

export { generateBooking };

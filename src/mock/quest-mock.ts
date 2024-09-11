import { faker } from '@faker-js/faker';
import { QUEST_LEVEL, QUEST_TYPE, QuestLevel, QUESTS, Setting } from '../const';
import { Quest } from '../types/quest';

function mockQuest(): Quest {
  const title = faker.helpers.arrayElement(QUESTS);

  return {
    id: crypto.randomUUID(),
    title,
    previewImg: faker.image.urlLoremFlickr({ category: title }),
    previewImgWebp: faker.image.urlLoremFlickr({ category: title }),
    level: faker.helpers.arrayElement(QUEST_LEVEL),
    type: faker.helpers.arrayElement(QUEST_TYPE),
    peopleMinMax: Array.from({ length: 2 }, () =>
      faker.number.int({ max: 10, min: 1 })
    ),
    description: faker.lorem.paragraph(),
    coverImg: faker.image.urlLoremFlickr({ category: title }),
    coverImgWebp: faker.image.urlLoremFlickr({ category: title }),
  };
}

const generateQuests = () =>
  Array.from({ length: Setting.QuestsCount }, mockQuest);

export { generateQuests };

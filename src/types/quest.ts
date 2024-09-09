import { QuestLevel, QuestType } from '../const';

type QuestLevelType = keyof typeof QuestLevel;
type QuestTypeType = keyof typeof QuestType;

interface Quest {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevelType;
  type: QuestTypeType;
  peopleMinMax: number[];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

type QuestPreview = Omit<Quest, 'description' | 'coverImg' | 'coverImgWebp'>;

export type { QuestLevelType, QuestTypeType, Quest, QuestPreview };

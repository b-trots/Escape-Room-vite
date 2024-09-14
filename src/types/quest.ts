import { QUEST_LEVEL, QUEST_TYPE } from '../const/template-const';


type QuestLevel = (typeof QUEST_LEVEL)[number];
type QuestType = (typeof QUEST_TYPE)[number];

interface Quest {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: number[];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

type QuestPreview = Omit<Quest, 'description' | 'coverImg' | 'coverImgWebp'>;

export type { Quest, QuestPreview };

import { RequestStatus } from '../../const/app-const';
import {
  FILTER_BY_COMPLEXITY,
  FILTER_BY_TOPIC,
} from '../../const/template-const';
import { BookingType } from '../booking';
import { Quest, QuestPreview } from '../quest';
import { ReservationType } from '../reservation';
import { AuthStatusValues } from '../user';

type QuestSlice = {
  quests: QuestPreview[];
  activeQuestId: string;
  quest: Quest | null;
  requestStatus: RequestStatus;
  isError: string;
  filterByTopic: FilterByTopicType;
  filterByComplexity: FilterByComplexityType;
};

type FilterByTopicType = (typeof FILTER_BY_TOPIC)[number];
type FilterByComplexityType = (typeof FILTER_BY_COMPLEXITY)[number];

type BookingSlice = {
  bookingInfo: BookingType[];
  reservation: ReservationType[];
  requestStatus: RequestStatus;
};

type UserSlice = {
  authStatus: AuthStatusValues;
  userEmail: string;
};

export type {
  QuestSlice,
  BookingSlice,
  UserSlice,
  FilterByTopicType,
  FilterByComplexityType,
};

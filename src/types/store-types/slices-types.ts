import { RequestStatus } from '../../const/app-const';
import { Booking } from '../booking';
import { Quest, QuestPreview } from '../quest';
import { Reservation } from '../reservation';
import { AuthStatusValues } from '../user';

type QuestSlice = {
  quests: QuestPreview[];
  activeQuestId: string;
  quest: Quest | null;
  requestStatus: RequestStatus;
  isError: string;
};

type BookingSlice = {
  bookingInfo: Booking[];
  reservation: Reservation[];
  requestStatus: RequestStatus;
};

type UserSlice = {
  authStatus: AuthStatusValues;
  userEmail: string;
};

export type { QuestSlice, BookingSlice, UserSlice };

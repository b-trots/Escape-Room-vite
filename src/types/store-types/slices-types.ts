import { RequestStatus } from '../../const/app-const';
import { Booking } from '../booking';
import { Quest, QuestPreview } from '../quest';
import { Reservation } from '../reservation';
import { AuthStatusValues } from '../user';

type QuestSlice = {
  quests: QuestPreview[];
  quest: Quest | null;
  requestStatus: RequestStatus;
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

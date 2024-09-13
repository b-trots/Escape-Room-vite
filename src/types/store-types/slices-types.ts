import { RequestStatus } from '../../const/app-const';
import { Quest } from '../quest';

type QuestsSlice = {
  quests: Quest[];
  requestStatus: RequestStatus;
};

export type { QuestsSlice };

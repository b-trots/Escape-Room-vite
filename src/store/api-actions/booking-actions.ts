import { APIRoute } from '../../const/app-const';
import { BookingType, NewBooking } from '../../types/booking';
import { appCreateAsyncThunk } from './quest-actions';

const bookingInfoAction = appCreateAsyncThunk<BookingType[], string>(
  'data/bookingInfo',
  async (questId, { extra: api }) => {
    const { data: bookingInfo } = await api.get<BookingType[]>(
      `${APIRoute.Quest}/${questId}${APIRoute.Booking}`
    );
    return bookingInfo;
  }
);

const bookingAction = appCreateAsyncThunk<
  void,
  { questId: string; bookingInfo: NewBooking }
>('data/booking', async ({ questId }, { extra: api }) => {
  await api.post<{ bookingInfo: NewBooking }>(
    `${APIRoute.Quest}/${questId}${APIRoute.Booking}`
  );
});

export { bookingAction, bookingInfoAction };

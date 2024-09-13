import { APIRoute } from '../../const/app-const';
import { Booking, NewBooking } from '../../types/booking';
import { appCreateAsyncThunk } from './quest-actions';

const bookingAction = appCreateAsyncThunk<
  void,
  { questId: string; bookingInfo:NewBooking }
>('data/booking', async ({ questId, bookingInfo }, { extra: api }) => {
  await api.post<{ bookingInfo:NewBooking }>(
    `${APIRoute.Quest}/${questId}${APIRoute.Booking}`,
    { bookingInfo }
  );

  // store.dispatch(fetchGetCommentsAction(offerId));
});

const bookingInfoAction = appCreateAsyncThunk<Booking[], string>(
  'data/bookingInfo',
  async (questId, { extra: api }) => {
    const { data: bookingInfo } = await api.get<Booking[]>(
      `${APIRoute.Quest}/${questId}${APIRoute.Booking}`
    );
    return bookingInfo;
  }
);

export { bookingAction, bookingInfoAction };

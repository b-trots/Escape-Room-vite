import { APIRoute } from '../../const/app-const';
import { Reservation } from '../../types/reservation';
import { appCreateAsyncThunk } from './quest-actions';

const reservationsAction = appCreateAsyncThunk<Reservation[], undefined>(
  'data/reservations',
  async (_arg, { extra: api }) => {
    const { data: reservations } = await api.get<Reservation[]>(
      APIRoute.Reservation
    );
    return reservations;
  }
);

const deleteReservationAction = appCreateAsyncThunk<void, string>(
  'data/deleteReservation',
  async (questId, { extra: api }) => {
    await api.delete(
      `${APIRoute.Reservation}/${questId}`
    );
  }
);

export { reservationsAction, deleteReservationAction };

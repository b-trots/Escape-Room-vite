import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus, SliceName } from '../../../const/app-const';
import { BookingSlice } from '../../../types/store-types/slices-types';
import { bookingInfoAction } from '../../api-actions/booking-actions';
import { reservationsAction } from '../../api-actions/reservation-actions';

const bookingState: BookingSlice = {
  bookingInfo: [],
  reservation: [],
  requestStatus: RequestStatus.Idle
};


const bookingSlice = createSlice({
  name: SliceName.Booking,
  initialState: bookingState,
  extraReducers: (builder) => {
    builder
      .addCase(bookingInfoAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(bookingInfoAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(bookingInfoAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.bookingInfo = action.payload;
      })
      .addCase(reservationsAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(reservationsAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(reservationsAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.reservation = action.payload;
      });
  },
  reducers: {},
  selectors: {
    bookingInfo: (state) => state.bookingInfo,
    reservation: (state) => state.reservation,
  },
});

const bookingSelectors = bookingSlice.selectors;

export { bookingSelectors, bookingSlice };

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { bookingInfoAction } from '../../store/api-actions/booking-actions';
import { useParams } from 'react-router-dom';
import {
  questSelectors,
  setActiveQuestId,
} from '../../store/slices/quest-slice/quest-slice';
import { bookingSelectors } from '../../store/slices/booking-slice/booking-slice';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { questAction } from '../../store/api-actions/quest-actions';
import { ShowLoading } from '../../components/main/show-loading';
import { Footer } from '../../components/footer/footer';

import { BookingContent } from './booking-content';

function Booking(): JSX.Element {
  const { id = '' } = useParams();
  const quest = useAppSelector(questSelectors.quest);
  const currentId = quest?.id ?? '';
  const booking = useAppSelector(bookingSelectors.bookingInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentId !== id) {
      dispatch(setActiveQuestId(id));
      Promise.all([
        dispatch(questAction(id)).unwrap(),
        dispatch(bookingInfoAction(id)).unwrap(),
      ]);
    }
  }, [id, dispatch, currentId]);


  if (quest===null || booking.length === 0) {
    return <ShowLoading />;
  } else {

    return (
      <>
        <FirstComponent />
        <div className="wrapper">
          <Header />
          <main className="page-content decorated-page">
            <BackgroundDecoration />
            <div className="container container--size-s">
              <BookingContent quest={quest} booking={booking}/>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export { Booking };

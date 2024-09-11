import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { QuestCard } from '../../components/main/quest-card/quest-card';
import { TitleName } from '../../const/app-const';
import { generateReservations } from '../../mock/reservation-mock';

function MainMyQuests(): JSX.Element {
  const reservations = generateReservations();

  return (
    <main className="page-content decorated-page">
      <BackgroundDecoration isBlur/>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">
            {TitleName.MyQuests}
          </h1>
        </div>
        <div className="cards-grid">
          {reservations.map((reservation) => (
            <QuestCard
              key={reservation.id}
              quest={reservation.quest}
              reservation={reservation}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export { MainMyQuests };

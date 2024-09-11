import { DaySlots } from '../../types/booking';

type TimeSlotListProps = {
  slots: DaySlots;
};

function TimeSlotsList({ slots }: TimeSlotListProps): JSX.Element {
  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">Сегодня</legend>
      <div className="booking-form__date-inner-wrapper">
        {slots.map((day) =>
          <TimeSlot key={day} day={day} />
        )}
      </div>
    </fieldset>
  );
}
export { TimeSlotsList };

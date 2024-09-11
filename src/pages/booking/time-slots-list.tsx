import { QuestDate } from '../../const/const';
import { DaySlots } from '../../types/booking';
import { toBigLetter } from '../../utils/utils';
import { TimeSlot } from './time-slot';

type TimeSlotListProps = {
  slots: DaySlots;
};

function TimeSlotsList({ slots }: TimeSlotListProps): JSX.Element {
  const bothDays = Object.entries(slots);
  return (
    <>
      {bothDays.map((day) => (
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">
            {QuestDate[toBigLetter(day[0]) as keyof typeof QuestDate]}
          </legend>
          <div className="booking-form__date-inner-wrapper">
            {day[1].map((time) => (
              <TimeSlot dayName={day[0]} slot={time} />
            ))}
          </div>
        </fieldset>
      ))}
    </>
  );
}

export { TimeSlotsList };

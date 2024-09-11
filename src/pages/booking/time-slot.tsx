import { QuestDate } from '../../const';
import { Slot } from '../../types/booking';

type TimeSlotProps = {
  day: QuestDate;
  slot: Slot;
};

function TimeSlot({ day, slot }: TimeSlotProps): JSX.Element {
  const timeInfo = (time: string) => {
    const splitTime = time.split(':');
    return `${splitTime[0]}h${splitTime[1]}m`;
  };

  const { time } = slot;
  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${day}${timeInfo(time)}`}
        name="date"
        // required="required"
        defaultValue="today9h45m"
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export { TimeSlot };

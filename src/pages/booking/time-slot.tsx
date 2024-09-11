import { QuestDays, Slot } from '../../types/booking';

type TimeSlotProps = {
  dayName: QuestDays;
  slot:Slot;
};

function TimeSlot({ dayName,slot }: TimeSlotProps) {
  const { time,isAvailable } = slot;

  const timeInfo = (time: string) => {
    const splitTime = time.split(':');
    return `${splitTime[0]}h${splitTime[1]}m`;
  };

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${dayName}${timeInfo(time)}`}
        name="date"
        required
        disabled={!isAvailable}
        defaultValue={`${dayName}${timeInfo(time)}`}
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export { TimeSlot };

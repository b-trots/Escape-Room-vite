import { UseFormRegister } from 'react-hook-form';
import { Slot } from '../../types/booking';
import { BookingInputsType } from './booking-form';

type TimeSlotProps = {
  dayName: string;
  slot: Slot;
  register: UseFormRegister<BookingInputsType>;
};

function TimeSlot({ dayName, slot, register }: TimeSlotProps) {
  const { time, isAvailable } = slot;
  const timeInfo = (currentTime: string) => {
    const splitTime = currentTime.split(':');
    return `${splitTime[0]}h${splitTime[1]}m`;
  };

  return (
    <label className="custom-radio booking-form__date">
      <input
        {...register('time', {
          required: {
            value: true,
            message: 'Выберите время',
          },
        })}
        type="radio"
        id={`${dayName}${timeInfo(time)}`}
        name="time"
        required
        disabled={!isAvailable}
        defaultValue={`${dayName}${timeInfo(time)}`}
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export { TimeSlot };

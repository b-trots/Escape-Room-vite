import { SelectedInfo } from '../../const/app-const';

type SelectedAddressProps = {
  address: string;
};
function SelectedAddress({ address }: SelectedAddressProps): JSX.Element {
  return (
    <p className="booking-map__address">
      {SelectedInfo.Address}
      {address}
    </p>
  );
}

export { SelectedAddress };

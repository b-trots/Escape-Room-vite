import { Contact } from '../../const';

function Hotline(): React.ReactNode {
  return (
    <a
      className="link header__side-item header__phone-link"
      href="tel:88003335599"
    >
      {Contact.Hotline}
    </a>
  );
}

export { Hotline };

import { Contact } from '../../const/app-const';


function Hotline(): JSX.Element {
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

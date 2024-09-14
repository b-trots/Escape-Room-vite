import { SocialApplication } from '../../const/template-const';
import { SocialApplicationType } from '../../types/common';

type SocialsItemProps = {
  application: SocialApplicationType;
};

function SocialsItem({ application }: SocialsItemProps): JSX.Element {
  const {id, label} = SocialApplication[application];
  return (
    <li className="socials__item">
      <a
        className="socials__link"
        href="#"
        aria-label={label}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <svg
          className="socials__icon socials__icon--default"
          width={28}
          height={28}
          aria-hidden="true"
        >
          <use xlinkHref={`#icon-${id}-default`} />
        </svg>
        <svg
          className="socials__icon socials__icon--interactive"
          width={28}
          height={28}
          aria-hidden="true"
        >
          <use xlinkHref="#icon-skype-interactive" />
        </svg>
      </a>
    </li>
  );
}

export { SocialsItem };

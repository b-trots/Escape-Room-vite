import { SocialApplication } from '../../const/app-const';
import { SocialApplicationType } from '../../types/common';
import { SocialsItem } from './socials-item';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container container--size-l">
        <div className="socials">
          <ul className="socials__list">
            {Object.keys(SocialApplication).map((application) => (
              <SocialsItem
                key={application}
                application={application as SocialApplicationType}
              />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

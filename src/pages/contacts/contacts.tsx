import React from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { FirstComponent } from '../../components/main/first-component/first-component';
import {
  OrganizationContact,
  OrganizationContactKeys,
} from '../../const/const';
import { OrganizationContactType } from '../../types/common';
import { SubTitleName, TitleName } from '../../const/app-const';

function Contacts(): JSX.Element {
  const correctInfo = (item: OrganizationContactType, info: string) => {
    if (item === OrganizationContactKeys[0]) {
      const contactInfo = info.split(',');
      return (
        <>
          {contactInfo[0]}, {React.createElement('br')} {contactInfo[1]},
          {contactInfo[2]}
        </>
      );
    }
    return info;
  };

  return (
    <div>
      <FirstComponent />
      <div className="wrapper">
        <Header />
        <main className="page-content decorated-page">
          <BackgroundDecoration isBlur />
          <div className="container">
            <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
              <p className="subtitle page-content__subtitle">
                {SubTitleName.Home}
              </p>
              <h1 className="title title--size-m page-content__title">
                {TitleName.Contact}
              </h1>
            </div>
            <div className="contacts">
              <dl className="contacts__list">
                {Object.entries(OrganizationContact).map((contactItem) => (
                  <div className="contacts__item" key={contactItem[0]}>
                    <dt className="contacts__dt">{contactItem[1][0]}</dt>
                    <dd className="contacts__dd">
                      <address className="contacts__address">
                        {correctInfo(contactItem[0] as keyof typeof OrganizationContact, contactItem[1][1])}
                      </address>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="contacts__map">
                <div className="map">
                  <div className="map__container" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export { Contacts };

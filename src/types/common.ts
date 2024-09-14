import { OrganizationContact, UserDataForLogin, UserDataForBooking, SocialApplication, FILTER_BY_TOPIC } from '../const/template-const';

type FilterTopicKeysType = (typeof FILTER_BY_TOPIC)[number];

type OrganizationContactType = keyof typeof OrganizationContact;

type UserDataLoginType = keyof typeof UserDataForLogin;
type UserDataBookingType = keyof typeof UserDataForBooking;
type UserDataFieldType = UserDataLoginType | UserDataBookingType;

type SocialApplicationType = keyof typeof SocialApplication;

export type {
  OrganizationContactType,
  UserDataLoginType,
  UserDataBookingType,
  UserDataFieldType,
  SocialApplicationType,
  FilterTopicKeysType,
};

import {
  FILTER_BY_COMPLEXITY,
  FILTER_BY_TOPIC,
  OrganizationContact,
} from '../const/const';
import { UserDataForBooking, UserDataForLogin } from '../const/const-for-user';

type FilterTopicType = (typeof FILTER_BY_TOPIC)[number];
type FilterComplexityType = (typeof FILTER_BY_COMPLEXITY)[number];
type OrganizationContactType = keyof typeof OrganizationContact;

type UserDataLoginType = keyof typeof UserDataForLogin;
type UserDataBookingType = keyof typeof UserDataForBooking;
type UserDataFieldType = UserDataLoginType | UserDataBookingType;

export type { FilterTopicType, FilterComplexityType, OrganizationContactType, UserDataLoginType, UserDataBookingType, UserDataFieldType };

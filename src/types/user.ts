import { AuthStatus } from '../const/app-const';
import { UserDataForBooking } from '../const/template-const';


type AuthStatusType = typeof AuthStatus;
type AuthStatusKeys = keyof typeof AuthStatus;

type AuthStatusValues = (typeof AuthStatus)[AuthStatusKeys];

interface User {
  email: string;
  token: string;
}

type AuthData = {
  login: string;
  password: string;
};

type UserDataBooking = keyof typeof UserDataForBooking;

export type {
  User,
  AuthData,
  AuthStatusKeys,
  AuthStatusValues,
  AuthStatusType,
  UserDataBooking,
};

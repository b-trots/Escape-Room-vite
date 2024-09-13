import { AuthStatus } from '../const/const';

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

export type {
  User,
  AuthData,
  AuthStatusKeys,
  AuthStatusValues,
  AuthStatusType,
};

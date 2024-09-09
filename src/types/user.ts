import { AuthStatus } from '../const';

type AuthType = keyof typeof AuthStatus;

interface User {
  email: string;
  token: string;
}

type AuthData = {
  email: string;
  password: string;
};

export type { User, AuthData, AuthType };

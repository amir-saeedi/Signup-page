import * as React from "react";

export interface UserInterface {
  id: number;
  username: string;
  phone: number;
  email: string;
  password: string;
}

const defaultValue = {} as UserInterface;
const defaultUpdate: React.Dispatch<React.SetStateAction<UserInterface>> = () =>
  defaultValue;

const user = React.createContext({
  user: defaultValue,
  setUser: defaultUpdate,
});

export default user;

export const UserProvider = user.Provider;

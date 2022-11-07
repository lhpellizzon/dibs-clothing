import { createContext } from "react";

export const UserContext = createContext({
  currentUser: "",
  setCurrentUser: () => currentUser === null,
});

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

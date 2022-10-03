import { createContext, useContext, useState } from "react";
import { getUser } from "../services/user";


const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw Error;
  }
  return context;
};

export { UserProvider, useAuth };
import { createContext, useContext, useState } from "react";

const BirthdayContext = createContext();

export const BirthdayProvider = ({ children }) => {
  const [screen, setScreen] = useState("loader");

  const value = {
    screen,
    setScreen,
  };

  return (
    <BirthdayContext.Provider value={value}>
      {children}
    </BirthdayContext.Provider>
  );
};

export const useBirthday = () => useContext(BirthdayContext);
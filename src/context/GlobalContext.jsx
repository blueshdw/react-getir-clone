import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [languageHandler, setLanguageHandler] = useState(false);
  const [loginHandler, setLoginHandler] = useState(false);
  const [registerHandler, setRegisterHandler] = useState(false);
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  return (
    <GlobalContext.Provider
      value={{
        languageHandler,
        setLanguageHandler,
        loginHandler,
        setLoginHandler,
        selected,
        setSelected,
        phones,
        registerHandler,
        setRegisterHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

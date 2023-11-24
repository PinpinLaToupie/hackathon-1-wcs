/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AchatContext = createContext();

export function ThemeProvider({ children }) {
  const [achat, setAchat] = useState(false);

  return (
    <AchatContext.Provider value={{ achat, setAchat }}>
      {children}
    </AchatContext.Provider>
  );
}

export const useAchat = () => useContext(AchatContext);

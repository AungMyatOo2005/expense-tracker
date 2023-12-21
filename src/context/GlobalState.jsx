import { createContext, useState } from "react";

export const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [transaction, setTransaction] = useState([
    { id: 1, text: "gaiter", amount: -500 },
    { id: 2, text: "salary", amount: 2000 },
    { id: 3, text: "lunch", amount: -100 },
  ]);
  return (
    <GlobalContext.Provider value={{ transaction }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

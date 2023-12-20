import { createContext, useState } from "react";

export const GlobalProvider = createContext();
const [transitionList, setTransitionList] = useState([
  { id: 1, text: gaiter, amount: -500 },
  { id: 2, text: salary, amount: +2000 },
  { id: 3, text: lunch, amount: -100 },
]);
const GlobalState = ({ children }) => {
  return <GlobalProvider.Provider value={{transitionList}}>{children}</GlobalProvider.Provider>;
};

export default GlobalState;

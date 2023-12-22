import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const transaction = [];
  const [state, dispatch] = useReducer(AppReducer, transaction);
  const addTransaction = (data) => {
    dispatch({
      type: "addList",
      payload: data,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "deleteList",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{ transaction: state, addTransaction, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

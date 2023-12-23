import { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const transaction = [];
  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("expense-tracker-transaction")) || [];
    setLsData(storedData);
  }, []);
  const [lsData, setLsData] = useState([]);
  const [transactionName, setTransactionName] = useState("");
  const [state, dispatch] = useReducer(AppReducer, transaction);
  const [currentId, setCurrentId] = useState(false);
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
      value={{
        transaction: state,
        addTransaction,
        deleteTransaction,
        lsData,
        setLsData,
        transactionName,
        setTransactionName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

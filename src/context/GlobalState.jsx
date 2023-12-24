import { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [lsData, setLsData] = useState([]);
  const [currentId, setCurrentId] = useState(false);
  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("expense-tracker-transaction")) || [];
    setLsData(storedData);
  }, []);
  const currentData = lsData.find((data) => data.id === currentId);
  const transaction = [];
  useEffect(() => {
    const data = currentId && currentData.transaction;
    dispatch({
      type: "init",
      payload: data,
    });
  }, [lsData, currentId]);

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
      value={{
        transaction: state,
        addTransaction,
        deleteTransaction,
        lsData,
        setLsData,
        currentId,
        setCurrentId,
        currentData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import GlobalProvider from "./context/GlobalState";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";
const App = () => {
  return (
    <GlobalProvider>
      <div className=" py-14 w-full flex items-center justify-center">
        <div className="w-[300px] flex items-center flex-col">
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;

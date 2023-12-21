import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import GlobalProvider from "./context/GlobalState";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

const App = () => {
  return (
    <GlobalProvider>
      <div className=" py-16 w-full flex items-center justify-center">
        <div className="w-[300px] flex items-center flex-col">
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;

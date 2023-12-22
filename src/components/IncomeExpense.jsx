import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);
  const income =
    transaction.length > 0 &&
    transaction.map((list) => list.amount).filter((amount) => amount > 0);
  const totalIncome =
    income.length > 0 && income.reduce((acc, item) => (acc += item));
  const expense =
    transaction.length > 0 &&
    transaction.map((list) => list.amount).filter((amount) => amount < 0);
  const totalExpense =
    expense.length > 0 && expense.reduce((acc, item) => (acc += item));
  return (
    <div className="w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-3 mt-8 px-5 flex items-center justify-center">
      <div className="flex items-center flex-col w-[50%] border-r border-gray-300">
        <p className="text-[16px] uppercase font-semibold">Income</p>
        <h5 className="text-green-500 font-semibold text-[20px]">
          ${Math.abs(totalIncome).toFixed(2)}
        </h5>
      </div>
      <div className="flex items-center flex-col w-[50%]">
        <p className="text-[16px] uppercase font-semibold">Expense</p>
        <h5 className="text-red-500 font-semibold text-[20px]">
          ${Math.abs(totalExpense).toFixed(2)}
        </h5>
      </div>
    </div>
  );
};

export default IncomeExpense;

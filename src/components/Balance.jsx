import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AddHistory from "./AddHistory";
import History from "./History";

const Balance = () => {
  const { transaction } = useContext(GlobalContext);
  const totalAmount =
    transaction.length > 0 &&
    transaction
      .map((list) => list.amount)
      .reduce((item, acc) => (item += acc), 0);
  return (
    <div className="w-full mt-6 font-semibold flex items-start justify-between">
      <div>
        <h5 className="uppercase">Your Balance</h5>

        <h1 className="text-[30px]">${Number(totalAmount).toFixed(2)}</h1>
      </div>
      <History />
      {transaction.length > 0 && <AddHistory />}
    </div>
  );
};

export default Balance;

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transaction } = useContext(GlobalContext);
  const totalAmount =
    transaction.length > 0 &&
    transaction
      .map((list) => list.amount)
      .reduce((item, acc) => (item += acc), 0);
  return (
    <div className="w-full mt-6 font-semibold">
      <h5 className="uppercase">Your Balance</h5>

      <h1 className="text-[30px]">${Number(totalAmount).toFixed(2)}</h1>
    </div>
  );
};

export default Balance;

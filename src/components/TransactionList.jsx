import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transition from "./Transaction";

const TransitionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <div className="w-full mt-10">
      <h4 className="w-full border-b border-gray-700 font-semibold pb-1 font-Roboto">
        Transaction
      </h4>
      {transaction.length > 0 ? (
        transaction.map((list) => <Transition key={list.id} list={list} />)
      ) : (
        <p className="text-center mt-5 font-Roboto">There is no transaction</p>
      )}
    </div>
  );
};

export default TransitionList;

import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [transaction, setTransaction] = useState({
    text: "",
    amount: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (transaction.text.trim() !== "" && transaction.amount.trim() !== "") {
      addTransaction({
        text: transaction.text,
        amount: Number(transaction.amount),
        id: Math.random(10000000),
      });
      setTransaction({ text: "", amount: "" });
    } else {
      alert("Please fill valid text and amount");
    }
  };
  return (
    <div className="w-full mt-8 flex flex-col">
      <h2 className="w-full border-b border-gray-700 font-semibold pb-1 font-Roboto mb-3">
        Add new transaction
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col">
        <label htmlFor="text" className="font-semibold">
          Text
        </label>
        <input
          name="text"
          type="text"
          className="border border-gray-500 py-1 px-3 outline-none mt-2"
          placeholder="Enter text..."
          onChange={onChange}
          value={transaction.text}
        />
        <p className="font-semibold mt-3 text-[14px]">
          Amount
          <br />
          (negative-expensive,positive-income)
        </p>
        <input
          type="number"
          name="amount"
          className="border border-gray-500 py-1 px-3 outline-none mt-2"
          placeholder="Enter amount..."
          onChange={onChange}
          value={transaction.amount}
        />
        <button className="bg-[#8577ff] mt-4 py-1 text-white font-semibold active:scale-[0.98]">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;

import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddHistory = () => {
  const {
    transaction,
    lsData,
    setLsData,
    transactionName,
    setTransactionName,
  } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(false);

  const addLs = (e) => {
    e.preventDefault();
    if (transactionName.trim() !== "") {
      const newData = {
        name: transactionName,
        transaction,
        id: Math.random(10000000),
      };
      const updatedData = [...lsData, newData];

      localStorage.setItem(
        "expense-tracker-transaction",
        JSON.stringify(updatedData)
      );
      setLsData(updatedData);
      setToggle(false);
      setTransactionName("");
    } else {
      alert("please fill transaction history name before update");
    }
  };

  return (
    <div className="flex flex-col items-end gap-4">
      <button
        className="bg-[#8577ff] text-white py-1 px-3 rounded-md text-[12px] animation-self active:scale-[0.98]"
        onClick={() => setToggle((prev) => !prev)}
      >
        Add to history
      </button>
      {toggle && (
        <form className="flex gap-2 animation-self" onSubmit={addLs}>
          <input
            type="text"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
            className="w-[100px] outline-none py-1 px-3 rounded-sm placeholder:text-[14px] text-[14px]"
            placeholder="enter name..."
          />

          <button
            className="bg-[#8577ff] text-white py-1 px-3 rounded-md text-[12px]
           active:scale-[0.98]"
            type="submit"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default AddHistory;

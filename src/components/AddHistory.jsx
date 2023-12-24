import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddHistory = () => {
  const { transaction, lsData, setLsData, currentId, currentData } =
    useContext(GlobalContext);
  const [transactionName, setTransactionName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    setIsUpdate(currentId && transaction !== currentData.transaction);
  }, [currentId, transaction, lsData]);

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

  const currentDataUpdate = (e) => {
    e.preventDefault();
    const updatedData = lsData.map((data) =>
      data.id === currentId
        ? {
            ...data,
            transaction: transaction,
            name: transactionName ? transactionName : data.name,
          }
        : data
    );

    localStorage.setItem(
      "expense-tracker-transaction",
      JSON.stringify(updatedData)
    );
    setToggle(false);
    setLsData(updatedData);
    setIsUpdate(false);
  };
  return (
    <div className="flex flex-col items-end gap-4">
      {currentId ? (
        isUpdate && (
          <button
            className="bg-[#8577ff] text-white py-1 px-3 rounded-md text-[12px] animation-self active:scale-[0.98]"
            onClick={() => setToggle((prev) => !prev)}
          >
            Update current data
          </button>
        )
      ) : (
        <button
          className="bg-[#8577ff] text-white py-1 px-3 rounded-md text-[12px] animation-self active:scale-[0.98]"
          onClick={() => setToggle((prev) => !prev)}
        >
          Add to history
        </button>
      )}

      {toggle && (
        <form
          className="flex gap-2 animation-self"
          onSubmit={isUpdate ? currentDataUpdate : addLs}
        >
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

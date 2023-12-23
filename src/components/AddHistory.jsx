import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddHistory = () => {
  const { transaction, lsData, setLsData } = useContext(GlobalContext);

  const addLs = () => {
    const newData = { name: "day_1", transaction, id: Math.random(10000000) };
    const updatedData = [...lsData, newData];

    localStorage.setItem(
      "expense-tracker-transaction",
      JSON.stringify(updatedData)
    );
    setLsData(updatedData);
  };

  return (
    <button
      className="bg-[#8577ff] text-white py-1 px-3 rounded-md text-[12px] animation-self active:scale-[0.98]"
      onClick={addLs}
    >
      Add to history
    </button>
  );
};

export default AddHistory;

import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddHistory = () => {
  const { transaction } = useContext(GlobalContext);
  const [lsData, setLsData] = useState([]);
  useEffect(() => {
    setLsData(
      JSON.parse(localStorage.getItem("expense-tracker-transaction")) || []
    );
  }, []);

  const addLs = () => {
    localStorage.setItem(
      "expense-tracker-transaction",
      JSON.stringify([...lsData, transaction])
    );
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

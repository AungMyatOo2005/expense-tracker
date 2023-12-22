import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TrashIcon } from "@heroicons/react/24/solid";
const Transition = ({ list }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`flex items-center justify-between px-2 py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-3 border-r-4 relative ${
        list.amount > 0 ? "border-green-500" : "border-red-500"
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h5 className=" font-Roboto">{list.text}</h5>
      <h4 className="font-semibold">{list.amount}</h4>
      {isHover && (
        <button
          className="absolute bg-red-500 left-[-32px] rounded-sm p-2 text-white icon-trash"
          onClick={() => deleteTransaction(list.id)}
        >
          <TrashIcon className="w-[20px]" />
        </button>
      )}
    </div>
  );
};

export default Transition;

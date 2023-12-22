import React from "react";

const Transition = ({ list }) => {
  return (
    <div
      className={`flex items-center justify-between px-2 py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-3 border-r-4 ${
        list.amount > 0 ? "border-green-500" : "border-red-500"
      }`}
    >
      <h5 className=" font-Roboto">{list.text}</h5>
      <h4 className="font-semibold">{list.amount}</h4>
    </div>
  );
};

export default Transition;

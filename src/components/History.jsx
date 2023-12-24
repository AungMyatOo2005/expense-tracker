import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const History = () => {
  const { lsData, setCurrentId, currentId, currentData } =
    useContext(GlobalContext);
  const [isToggle, setIsToggle] = useState(false);

  const currentName =
    currentId && currentData?.name
      ? currentData.name.length > 8
        ? `${currentData.name.slice(0, 8)}...`
        : currentData.name
      : "add new";

  return (
    <>
      {lsData.length > 0 && (
        <div
          className="bg-white w-[120px]  py-1 px-2 rounded-sm shadow-lg relative"
          onClick={() => setIsToggle((prev) => !prev)}
          onMouseEnter={() => setIsToggle(true)}
          onMouseLeave={() => setIsToggle(false)}
        >
          <div className="flex items-center gap-2 justify-evenly">
            {currentName}
            {isToggle ? (
              <ChevronUpIcon className="w-[18px]" />
            ) : (
              <ChevronDownIcon className="w-[18px]" />
            )}
          </div>
          <ul
            className={`absolute flex flex-col bg-[#0000008e] backdrop-blur-[5px] w-full left-0 rounded-sm drop-down text-gray-200 font-normal ${
              isToggle && "open"
            }`}
          >
            <li
              className={`py-2 px-2 cursor-pointer hover:bg-[#80a8ff4d] border-b border-black`}
              onClick={() => setCurrentId(false)}
            >
              add new
            </li>
            {lsData.map((data, index) => (
              <li
                className={`${
                  lsData.length - 1 > index && "border-b border-black"
                } py-2 px-2 cursor-pointer hover:bg-[#80a8ff4d]`}
                key={data.id}
                onClick={() => setCurrentId(data.id)}
              >
                {data.name.length > 10
                  ? `${data.name.slice(0, 10)}...`
                  : data.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default History;

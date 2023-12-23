import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
const History = () => {
  const { lsData } = useContext(GlobalContext);
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      {lsData.length > 0 && (
        <div
          className="bg-white w-[120px]  py-1 px-2 rounded-sm shadow-lg relative"
          onMouseEnter={() => setIsToggle(true)}
          onMouseLeave={() => setIsToggle(false)}
        >
          <div className=" flex items-center gap-2 justify-evenly">
            add new
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
              onClick={() => console.log("lol")}
            >
              add new
            </li>
            {lsData.map((data, index) => (
              <li
                className={`${
                  lsData.length - 1 > index && "border-b border-black"
                } py-2 px-2 cursor-pointer hover:bg-[#80a8ff4d]`}
                key={data.id}
                onClick={() => console.log(data.id)}
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default History;

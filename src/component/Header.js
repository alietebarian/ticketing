import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";


export default function Header() {

  const [arrowDirection, setArrowDirection] = useState(false)

  return (
    <div className="flex justify-between align-middle bg-white h-auto shadow-xl shadow-slate-300 items-center	">
      <div className="p-[20px] flex relative">
        <input
          type="text"
          className="border-2 rounded-xl border-EEEDEB px-4 py-1 w-[300px] text-xl"
          placeholder="search..."
        />
        <p className="text-2xl absolute right-8 top-7 text-EEEDEB">
          <CiSearch />
        </p>
      </div>
      <div
        className="flex align-middle p-[15px] text-center cursor-pointer"
        onClick={() => setArrowDirection(!arrowDirection)}
      >
        <p className="mt-3">
          {!arrowDirection ? <FaArrowLeft /> : <FaArrowDown />}
        </p>
        <div className="ml-8">
          <h3 className="font-bold">Ali Etebarian</h3>
          <h5 className="font-medium">Manager</h5>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { HiOutlineLink, HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
function Header() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between  items-center rounded-sm shadow-sm">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-grey-100 absolute top-1/2 -translate-y-1/2 left-2"
        />
        <input
          type="text"
          placeholder="Seach..."
          className="text-3sm focus:outline-none active:outline-none h-10 w-[24rem] border border-grey-200 px-4 pl-8"
        />
      </div>
      <div className="ml-80">
        <div className="ml-80">
          <div className="ml-60 flex flex-row gap-4 cursor-pointer">
            <HiOutlineUser fontSize={22} />
            <HiOutlineLink fontSize={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

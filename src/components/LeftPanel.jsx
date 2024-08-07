import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";

const LeftPanel = () => {
  return (
    <div className="w-[5%] bg-[#2A2E34] flex flex-col h-[100vh] py-4 justify-between">
      <div className="flex flex-col items-center justify-center gap-8 text-lg">
        <span className="text-orange-700">
          <RxHamburgerMenu />
        </span>
        <span className="text-white">
          <IoMdHome />
        </span>
        <span className="text-white">
          <IoStatsChart />
        </span>
        <span className="text-white">
          <SlCalender />
        </span>
        <span className="text-white">
          <FaShoppingCart />
        </span>
        <span className="text-white">
          <TbListDetails />
        </span>
      </div>
      <div className="text-lg flex justify-center">
        <span className="text-white">
          <IoMdLogOut />
        </span>
      </div>
    </div>
  );
};

export default LeftPanel;

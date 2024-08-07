import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { IoIosSettings, IoIosNotifications } from "react-icons/io";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex bg-[#2A2E34] justify-between px-5 py-2">
      <div className="bg-gray-700 border px-2 border-[gray] items-center justify-center rounded flex gap-2">
        <span className="text-white">
          <CiSearch />
        </span>
        <input
          className="text-none text-white bg-gray-700 outline-none"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="flex items-center gap-5 text-xl text-white">
        <span className="">
          <TiMessage />
        </span>
        <span className="">
          <IoIosSettings />
        </span>
        <span className="">
          <IoIosNotifications />
        </span>
        <img
          className="rounded-full"
          height={20}
          width={20}
          src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Header;

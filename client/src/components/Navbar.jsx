import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-gray-200 px-4 h-10">
        <div className="w-[10%] flex font-bold text-zinc-800 cursor-pointer items-center justify-center">
          LOGO
        </div>
        <ul className="flex items-center justify-center w-[50%] gap-8 text-zinc-800 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;

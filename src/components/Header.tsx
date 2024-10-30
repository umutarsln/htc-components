"use client";
import { FiBell } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (


    <div className="bg-white shadow-xl rounded-md lg:rounded-xl mt-2 lg:mt-4">

  {/* Üst Sıra */}
  <div className="flex justify-between items-center p-1 md:p-3 lg:p-3 xl:p-3 2xl:p-3">
    <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3">
      <div
        className="bg-gray-400 h-6 w-6 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 2xl:bg-black 2xl:shadow-2xl rounded-full cursor-pointer"
        onClick={toggleSidebar}
      ></div>
      <span className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-xl text-black font-semibold ">Dashboard</span>
    </div>

    <div className="flex items-center space-x-2 md:space-x-4 ">
      <div className="relative flex items-center space-x-1 md:space-x-2 lg:space-x-3 border border-black  bg-white px-1 py-0.5 md:px-2 md:py-0.5 rounded-md">
        <FiBell className="text-lg md:text-xl cursor-pointer" /> //Buraya bak
        <span className="text-xs md:text-sm lg:text-lg font-medium text-black">Notification</span>
        <span className="bg-blue-100 text-blue-800 font-semibold px-1 py-0.5 md:px-3 md:py-1 lg:px-2 lg:py-0.5 rounded-md">
          2
        </span>
      </div>
    </div>
  </div>

  {/* Alt Sıra */}
  <div className="flex justify-between items-center p-2 md:p-3 lg:p-4">
    <div>
      <h1 className="text-lg md:text-xl lg:text-2xl text-black font-bold">Welcome Murat,</h1>
      <p className="text-sm md:text-base lg:text-xl text-gray-500">You can display all updates here</p>
      <p className="text-xs md:text-sm lg:text-md text-gray-400">Last Update: 26.09.2024</p>
    </div>
    <button className="bg-blue-500 text-white px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-2 rounded-lg">
      Export Data
    </button>
  </div>
</div>











    
  );
};

export default Header;

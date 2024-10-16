"use client";
import { FiBell } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="bg-white shadow-md">
      {/* Üst Sıra */}
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center space-x-2">
          {/* Sol tarafta küçük logo ve Dashboard yazısı */}
          <div
            className="bg-gray-400 h-8 w-8 rounded-full cursor-pointer"
            onClick={toggleSidebar} // Logo tıklamasıyla Sidebar açılıp kapanır
          ></div>
          <span className="text-sm font-semibold">Dashboard</span>
        </div>
        {/* Sağ tarafta Notifications */}
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center space-x-2 border border-gray-300 bg-white px-2 py-0.5 rounded-md">
            <FiBell className="text-xl cursor-pointer" />
            <span className="text-sm font-medium">Notification</span>
            <span className="bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-md">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Alt Sıra */}
      <div className="flex justify-between items-center p-4">
        {/* Sol Taraf */}
        <div>
          <h1 className="text-2xl font-bold">Welcome Murat,</h1>
          <p className="text-gray-500">You can display all updates here</p>
          <p className="text-sm text-gray-400">Last Update: 26.09.2024</p>
        </div>
        {/* Sağ Taraf */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Export Data
        </button>
      </div>
    </div>
  );
};

export default Header;

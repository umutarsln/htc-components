import { FiMoreVertical, FiHome, FiUserCheck, FiBarChart2 } from "react-icons/fi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";

const HotelStats = () => {
  const [selectedRange, setSelectedRange] = useState("Total");

  const stats = [
    {
      title: "Total Hotel",
      value: 12,
      change: "9.2%",
      increase: true,
      icon: <FiHome className="text-2xl text-gray-500" />, // Ev simgesi
    },
    {
      title: "Active Guest",
      value: 8340,
      change: "9.2%",
      increase: false,
      icon: <FiUserCheck className="text-2xl text-gray-500" />, // Kullanıcı onay simgesi
    },
  ];

  const hotelRank = [
    { name: "Akra Hotels", activeGuests: 1400 },
    { name: "Barut Hotel", activeGuests: 800 },
    { name: "Akra V Hotel", activeGuests: 600 },
    { name: "Dedeman Hotel", activeGuests: 400 },
  ];

  return (
    <div className="py-2 flex justify-between space-x-4 w-full"> {/* Flex yapısı ve tam genişlik */}
      {/* Stats Cards */}
      <div className="flex-1 flex space-x-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            {/* Icon and More Options */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                {stat.icon}
                <span className="text-gray-500 font-semibold">{stat.title}</span>
              </div>
              <FiMoreVertical className="text-gray-500" />
            </div>

            {/* Stats Value and Change - Alt kısımda */}
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-2xl font-bold" style={{ color: "#323C4D" }}>
                {stat.value.toLocaleString()}
              </h2>
              <div
                className={`flex items-center space-x-1 text-sm rounded-lg px-2 py-1 border ${
                  stat.increase
                    ? "text-green-500 bg-green-50 border-green-300"
                    : "text-red-500 bg-red-50 border-red-300"
                }`}
              >
                {stat.increase ? (
                  <FaArrowUp className="text-xs" />
                ) : (
                  <FaArrowDown className="text-xs" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hotel Activity Rank */}
      <div
        className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <FiBarChart2 className="text-2xl text-gray-500" />
            <span className="text-gray-500 font-semibold">Hotel Activity Rank</span>
          </div>
          <FiMoreVertical className="text-gray-500" />
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {hotelRank.map((hotel, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-semibold">H</span>
                </div>
                <div className="ml-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {hotel.activeGuests} Active
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelStats;

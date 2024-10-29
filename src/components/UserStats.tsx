import { FiMoreVertical } from "react-icons/fi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { FiShoppingBag, FiUsers, FiUserCheck, FiUser } from "react-icons/fi"; 

const UserStats = () => {
  const [selectedRange, setSelectedRange] = useState("Total");

  const stats = [
    {
      titles: {
        Total: "Total Dealer",
        Today: "Today Dealer",
        "Last Week": "Last Week Dealer",
        "Last Month": "Last Month Dealer",
      },
      ranges: {
        Total: { value: 182, change: "9.2%", increase: true },
        Today: { value: 50, change: "1.2%", increase: true },
        "Last Week": { value: 120, change: "3.8%", increase: false },
        "Last Month": { value: 140, change: "5.5%", increase: true },
      },
      icon: <FiShoppingBag className="text-2xl text-gray-500" />,
    },
    {
      titles: {
        Total: "Total Client",
        Today: "Today Client",
        "Last Week": "Last Week Client",
        "Last Month": "Last Month Client",
      },
      ranges: {
        Total: { value: 606, change: "9.2%", increase: false },
        Today: { value: 150, change: "2.3%", increase: false },
        "Last Week": { value: 500, change: "8.4%", increase: true },
        "Last Month": { value: 480, change: "4.1%", increase: true },
      },
      icon: <FiUsers className="text-2xl text-gray-500" />,
    },
    {
      title: "Active Guest",
      value: 8340,
      change: "9.2%",
      increase: true,
      icon: <FiUserCheck className="text-2xl text-gray-500" />,
    },
    {
      title: "Guest All The Time",
      value: 108802,
      change: "60.4%",
      increase: true,
      icon: <FiUser className="text-2xl text-gray-500" />,
    },
  ];

  const ranges = ["Total", "Today", "Last Week", "Last Month"];

  return (
    <div className="py-2 mx-1 md:mx-2 lg:mx-4 my-1  ">
      {/* Date Range Selection */}
      <div className="flex flex-wrap justify-around mb-2 items-center lg:justify-between lg:mb-4">
        <div className="flex flex-wrap space-x-4 m:space-x-5 lg:space-x-6">
          {ranges.map((range) => (
            <button
              key={range}
              className={`py-2 px-3 m:py-2 m:px-3 lg:py-1 lg:px-3 mb-2 lg:mb-3   ${
                selectedRange === range
                  ? "bg-gray-200 text-black text-sm lg:text-lg  font-semibold"
                  : "text-gray-500 text-sm lg:text-lg hover:bg-gray-100"
              } rounded-md lg:rounded-xl border border-gray-300 transition-colors duration-200`}
              onClick={() => setSelectedRange(range)} // Seçilen aralığa göre güncelle
            >
              {range}
            </button>
          ))}
        </div>
        {/* Date Range Picker */}
        <button
          className="text-gray-500 border border-gray-300 px-2 py-2 lg:px-4 lg:py-2 rounded-md lg:rounded-lg hover:bg-gray-100 mt-3 mb-3"
          style={{ color: "#65789A" }} // Date Range button rengini değiştirdik
        >
          Date Range
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 m:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-3 lg:p-4 rounded-md lg:rounded-lg shadow lg:shadow-md border border-gray-200"
          >
            {/* Icon and More Options */}
            <div className="flex justify-between items-center mb-3 lg:mb-4">
              <div className="flex items-center space-x-2 lg:space-x-3">
                {stat.icon}
                <span className="text-gray-500">
                  {stat.titles ? stat.titles[selectedRange] : stat.title}
                </span>
              </div>
              <FiMoreVertical className="text-gray-500" />
            </div>

            {/* Stats Value and Change */}
            {stat.ranges ? (
              <div className="flex justify-between items-center">
                <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: "#323C4D" }}>
                  {stat.ranges[selectedRange].value.toLocaleString()}
                </h2>
                <div
                  className={`flex  items-center space-x-1 lg:space-x-2 text-base lg:text-lg rounded-md lg:rounded-xl px-2 py-1 lg:px-3 lg:py-1 border ${
                    stat.ranges[selectedRange].increase
                      ? "text-green-500 bg-green-50 border-green-300"
                      : "text-red-500 bg-red-50 border-red-300"
                  }`}
                >
                  {stat.ranges[selectedRange].increase ? (
                    <FaArrowUp className="text-xs" />
                  ) : (
                    <FaArrowDown className="text-xs" />
                  )}
                  <span>{stat.ranges[selectedRange].change}</span>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <h2 className=" text-2xl lg:text-3xl font-bold" style={{ color: "#323C4D" }}>
                  {stat.value.toLocaleString()}
                </h2>
                <div
                  className={`flex items-center space-x-1 lg:space-x-2 text-base lg:text-lg rounded-md lg:rounded-xl px-2 py-1 lg:px-3 lg:py-1 border ${
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStats;

import { FiMoreVertical } from "react-icons/fi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { FiShoppingBag, FiUsers, FiUserCheck, FiUser } from "react-icons/fi"; 

type RangeKey = "Total" | "Today" | "Last Week" | "Last Month";

const UserStats = () => {
  const [selectedRange, setSelectedRange] = useState<RangeKey>("Total");

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
    <div className="py-2">
      {/* Date Range Selection */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="flex flex-wrap">
          {ranges.map((range) => (
            <button
              key={range}
              className={`py-2 px-4 ${
                selectedRange === range
                  ? "bg-gray-200 text-black font-semibold"
                  : "text-gray-500 hover:bg-gray-100"
              } rounded-lg border border-gray-300 transition-colors duration-200`}
              onClick={() => setSelectedRange(range as RangeKey)} // String'i RangeKey tipine dönüştürüyoruz
            >
              {range}
            </button>
          ))}
        </div>
        {/* Date Range Picker */}
        <button
          className="text-gray-500 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 mt-2 sm:mt-0"
          style={{ color: "#65789A" }} // Date Range button rengini değiştirdik
        >
          Date Range
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            {/* Icon and More Options */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
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
                <h2 className="text-3xl font-bold" style={{ color: "#323C4D" }}>
                  {stat.ranges[selectedRange].value.toLocaleString()}
                </h2>
                <div
                  className={`flex items-center space-x-1 text-sm rounded-lg px-2 py-1 border ${
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
                <h2 className="text-3xl font-bold" style={{ color: "#323C4D" }}>
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStats;

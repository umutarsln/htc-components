"use client"
import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

interface LogData {
  hotelName: string;
  logName: string;
  date: string;
}

const CurrentLogsTable: React.FC = () => {
  const initialData: LogData[] = [
    {
      hotelName: "Akra Hotel",
      logName: "All Customer Logs",
      date: "27.09.2024 - 10:30",
    },
    {
      hotelName: "Akra Hotel",
      logName: "All Customer Logs",
      date: "27.09.2024 - 10:30",
    },
    {
      hotelName: "Akra Hotel",
      logName: "All Customer Logs",
      date: "27.09.2024 - 10:30",
    },
    {
      hotelName: "Akra Hotel",
      logName: "All Customer Logs",
      date: "27.09.2024 - 10:30",
    },
    {
      hotelName: "Akra Hotel",
      logName: "All Customer Logs",
      date: "27.09.2024 - 10:30",
    },
    {
      hotelName: "Akra Hotel",
      logName: "All Customer Logs",
      date: "27.09.2024 - 10:30",
    },
  ];

  const [data, setData] = useState<LogData[]>(initialData);

  const randomNumber = 18; // The number in the blue box for logs

  // Define column widths for uniformity
  const columnWidths = {
    hotelName: "500px",
    logName: "500px",
    date: "500px",
    actions: "100px",
  };

  return (
    <div className="mt-4 p-4 lg:mt-4 lg:p-4 w-full bg-white shadow-md lg:shadow-lg rounded-lg lg:rounded-md border border-gray-200">
      <div className="flex justify-between items-center mb-2 lg:mb-4">
        <div className="flex items-center">
          <h2 className="text-lg lg:text-base font-semibold">Current Logs</h2>
          <div className="bg-blue-200 text-blue-900 px-2 py-1 lg:px-3 lg:py-1 rounded-lg lg:rounded-md font-bold ml-2">
            {randomNumber}
          </div> {/* Random number in blue box */}
        </div>
        <button className="mb-3 lg:mb-1 border border-gray-300 text-gray-600 px-4 py-3 lg:px-4 lg:py-2 lg:rounded-md rounded-lg hover:bg-gray-100 transition duration-200">
          See All Connections
        </button>
      </div>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <table
          className="min-w-full bg-white border-collapse border border-gray-200"
          style={{
            borderRadius: "8px",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr
              className="bg-gray-100 text-gray-500"
              style={{
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              {[
                { label: "Hotel Name", field: "hotelName" },
                { label: "Log Name", field: "logName" },
                { label: "Date", field: "date" },
              ].map(({ label, field }) => (
                <th
                  key={field}
                  style={{
                    padding: "10px",
                    width: columnWidths[field as keyof typeof columnWidths],
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {label}
                </th>
              ))}
              <th style={{ padding: "10px", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition duration-150"
                style={{ borderBottom: "1px solid #e2e8f0" }}
              >
                <td style={{ padding: "10px", width: columnWidths.hotelName }}>
                  {item.hotelName}
                </td>
                <td style={{ padding: "10px", width: columnWidths.logName }}>
                  {item.logName}
                </td>
                <td style={{ padding: "10px", width: columnWidths.date }}>
                  {item.date}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <FaEllipsisV />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentLogsTable;

import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

interface ConnectionData {
  room: string;
  ipAddress: string;
  macAddress: string;
  fullName: string;
  email: string;
  date: string;
  birthday: string;
}

const ConnectionDetailsTable: React.FC = () => {
  const initialData: ConnectionData[] = [
    {
      room: "1010",
      ipAddress: "170.20.12.189",
      macAddress: "AC:92:32:C1:18:04",
      fullName: "Murat Tenil",
      email: "mail@gmail.com",
      date: "27.09.2024 - 10:30",
      birthday: "01.01.1999",
    },
    {
      room: "1010",
      ipAddress: "170.20.12.189",
      macAddress: "AC:92:32:C1:18:04",
      fullName: "Murat Tenil",
      email: "mail@gmail.com",
      date: "27.09.2024 - 10:30",
      birthday: "01.01.1999",
    },
    {
      room: "1010",
      ipAddress: "170.20.12.189",
      macAddress: "AC:92:32:C1:18:04",
      fullName: "Murat Tenil",
      email: "mail@gmail.com",
      date: "27.09.2024 - 10:30",
      birthday: "01.01.1999",
    },
    {
      room: "1010",
      ipAddress: "170.20.12.189",
      macAddress: "AC:92:32:C1:18:04",
      fullName: "Murat Tenil",
      email: "mail@gmail.com",
      date: "27.09.2024 - 10:30",
      birthday: "01.01.1999",
    },
    {
      room: "1010",
      ipAddress: "170.20.12.189",
      macAddress: "AC:92:32:C1:18:04",
      fullName: "Murat Tenil",
      email: "mail@gmail.com",
      date: "27.09.2024 - 10:30",
      birthday: "01.01.1999",
    },
    {
      room: "1010",
      ipAddress: "170.20.12.189",
      macAddress: "AC:92:32:C1:18:04",
      fullName: "Murat Tenil",
      email: "mail@gmail.com",
      date: "27.09.2024 - 10:30",
      birthday: "01.01.1999",
    },
  ];

  const [data, setData] = useState<ConnectionData[]>(initialData);

  const randomNumber = Math.floor(Math.random() * 10000); // Random number for the blue box

  // Define column widths for uniformity
  const columnWidths = {
    room: "100px",
    ipAddress: "200px",
    macAddress: "200px",
    fullName: "200px",
    email: "250px",
    date: "200px",
    birthday: "150px",
    actions: "100px",
  };

  return (
    <div className="mt-4 p-4 bg-white w-full shadow-md lg:shadow-lg rounded-lg lg:rounded-md  border border-gray-200">
      <div className="flex justify-between items-center mb-2 lg:mb-4">
        <div className="flex items-center">
          <h2 className="text-md font-semibold">Current Connections</h2>
          <div className="bg-blue-200 text-blue-900 px-2 py-1 lg:px-3 lg:py-1 rounded-md font-bold ml-2">55</div>
        </div>
        <button className="mb-3 lg:mb-1 border border-gray-300 text-gray-600 px-4 py-3 lg:px-4 lg:py-2 lg:rounded-md rounded-lg hover:bg-gray-100 transition duration-200">
          See All Connections
        </button>
      </div>

      <div className="overflow-x-auto w-full max-w-full">
        <table className="w-full bg-white border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr className="text-left text-sm">
              {[
                { label: "Room", field: "room" },
                { label: "IP Address", field: "ipAddress" },
                { label: "MAC", field: "macAddress" },
                { label: "Full Name", field: "fullName" },
                { label: "Email", field: "email" },
                { label: "Date", field: "date" },
                { label: "Birthday", field: "birthday" },
              ].map(({ label, field }) => (
                <th key={field} className="px-4 py-2 text-center">
                  {label}
                </th>
              ))}
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-150 border-b border-gray-200">
                <td className="px-4 py-2">{item.room}</td>
                <td className="px-4 py-2">{item.ipAddress}</td>
                <td className="px-4 py-2">{item.macAddress}</td>
                <td className="px-4 py-2">{item.fullName}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.birthday}</td>
                <td className="px-4 py-2 text-center">
                  <button title="More options" className="hover:text-blue-500">
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default ConnectionDetailsTable;

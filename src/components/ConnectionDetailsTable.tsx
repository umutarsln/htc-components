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
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg border border-gray-200"> {/* En dış çerçeve rengini açtık */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-md font-semibold">Current Connections</h2>
          <div className="bg-blue-200 text-blue-900 px-2 py-1 rounded-md font-bold ml-2">
            55
          </div> {/* Random number in blue box */}
        </div>
        <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
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
                { label: "Room", field: "room" },
                { label: "IP Address", field: "ipAddress" },
                { label: "MAC", field: "macAddress" },
                { label: "Full Name", field: "fullName" },
                { label: "Email", field: "email" },
                { label: "Date", field: "date" },
                { label: "Birthday", field: "birthday" },
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
                <td style={{ padding: "10px", width: columnWidths.room }}>
                  {item.room}
                </td>
                <td style={{ padding: "10px", width: columnWidths.ipAddress }}>
                  {item.ipAddress}
                </td>
                <td style={{ padding: "10px", width: columnWidths.macAddress }}>
                  {item.macAddress}
                </td>
                <td style={{ padding: "10px", width: columnWidths.fullName }}>
                  {item.fullName}
                </td>
                <td style={{ padding: "10px", width: columnWidths.email }}>
                  {item.email}
                </td>
                <td style={{ padding: "10px", width: columnWidths.date }}>
                  {item.date}
                </td>
                <td style={{ padding: "10px", width: columnWidths.birthday }}>
                  {item.birthday}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <button >
                    <FaEllipsisV  />
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

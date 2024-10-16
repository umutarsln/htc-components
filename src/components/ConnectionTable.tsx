import React from "react";
import styles from "./styles/ConnectionTable.module.scss";

const ConnectionTable = () => {
  // Rastgele kişilere ait sabit veriler
  const data = [
    {
      room: 101,
      connection_time: "30.09.2024 - 12:12:12",
      ip: "172.20.12.101",
      mac: "AC:92:32:C1:18:01",
      name: "Ahmet Y.",
      email: "ahmet.y@example.com",
      birth_date: "15.02.1985",
    },
    {
      room: 202,
      connection_time: "30.09.2024 - 12:15:30",
      ip: "172.20.12.102",
      mac: "AC:92:32:C1:18:02",
      name: "Merve K.",
      email: "merve.k@example.com",
      birth_date: "25.04.1990",
    },
    {
      room: 303,
      connection_time: "30.09.2024 - 12:20:45",
      ip: "172.20.12.103",
      mac: "AC:92:32:C1:18:03",
      name: "Ali V.",
      email: "ali.v@example.com",
      birth_date: "10.06.1978",
    },
    {
      room: 404,
      connection_time: "30.09.2024 - 12:30:12",
      ip: "172.20.12.104",
      mac: "AC:92:32:C1:18:04",
      name: "Elif S.",
      email: "elif.s@example.com",
      birth_date: "05.09.1995",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Güncel Bağlantılar</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Room</th>
            <th>Bağlantı Zamanı</th>
            <th>IP</th>
            <th>MAC</th>
            <th>İsim</th>
            <th>E-posta</th>
            <th>Doğum Günü</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={styles.row}>
              <td>{item.room}</td>
              <td>{item.connection_time}</td>
              <td>{item.ip}</td>
              <td>{item.mac}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.birth_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConnectionTable;

"use client";
import React, { useState, useEffect } from "react";
import UserStats from "@/components/UserStats";
import StatisticChart from "@/components/StatisticChart";
import LicenseExpireList from "@/components/LicenseExpireList";
import ConnectionDetailsTable from "@/components/ConnectionDetailsTable";
import ConnectionTable from "@/components/ConnectionTable";
import CurrentLogsTable from "@/components/CurrentLogsTable";
import GuestTrafficChart from "@/components/GuestTrafficChart";
import GuestMonitoring from "@/components/GuestMonitoring";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const HomePage = () => {
  const [memoryUsage, setMemoryUsage] = useState(65);
  const [diskUsage, setDiskUsage] = useState(75);

  useEffect(() => {
    // Burada bir backend ya da database API'sinden veri çekebilirsin.
    // setMemoryUsage ile dinamik veri güncellemesi yapılabilir.
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
        <Sidebar isOpen={isSidebarOpen} currentPage="modules" />
      </div>
      
      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <Header toggleSidebar={toggleSidebar} />

        {/* Asıl içerik */}
        <div className="container mx-auto p-4">
          <UserStats /> {/* Kullanıcı istatistiklerini gösteren kısım */}

          {/* Flexbox ile layout'u responsive yapıyoruz */}
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Sol tarafta StatisticChart */}
            <div className="w-full lg:w-3/4">
              <StatisticChart />
            </div>

            {/* Sağ tarafta LicenseExpireList */}
            <div className="w-full lg:w-1/4">
              <LicenseExpireList />
            </div>
          </div>

          <div>
            <ConnectionDetailsTable />
          </div>
          <div>
            <CurrentLogsTable />
          </div>
          <div className="flex flex-wrap space-x-4">
            <GuestTrafficChart />
            <GuestMonitoring />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

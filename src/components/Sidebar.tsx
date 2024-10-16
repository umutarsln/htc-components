"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronRight, FiSearch } from "react-icons/fi";
import Image from "next/image";

// SidebarItem bileşeni. Açık olup olmadığını kontrol eden isActive prop'u alıyor.
const SidebarItem = ({ title, dropdown, items, icon, isActive, onClick }: any) => {
  return (
    <div>
      <div
        onClick={onClick} // Tıklanınca onClick tetikleniyor
        className="flex justify-between items-center cursor-pointer p-2 rounded-lg transition-all duration-300 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100"
      >
        <div className="flex items-center space-x-2">
          <Image src={icon} alt="icon" width={20} height={20} /> {/* Icon */}
          <span>{title}</span>
        </div>
        {dropdown ? (
          isActive ? (
            <FiChevronDown className="ml-2" />
          ) : (
            <FiChevronRight className="ml-2" />
          )
        ) : null}
      </div>
      {isActive && dropdown && (
        <ul className="pl-4">
          {items.map((item: string, index: number) => (
            <li
              key={index}
              className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:opacity-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  // Sadece bir item'in açık kalması için activeIndex kullanıyoruz
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 
  const [isCompanyOpen, setIsCompanyOpen] = useState(false); // For company dropdown

  const handleItemClick = (index: number) => {
    // Eğer aynı item tekrar tıklanmışsa, kapatıyoruz.
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      }  bg-white shadow-lg p-4 transition-all duration-300 flex flex-col`}
      style={{ width: "256px", height: "725px" }} // Sidebar 256x1022 boyutlarına ayarlandı
    >
      {/* MSE Teknoloji Logosu */}
      <div style={{ width: "200px", height: "100px", position: "absolute", top: "20px" }}>
        <Image
          src="/büyüklogo.svg"
          alt="MSE Teknoloji"
          width={isOpen ? 200 : 40}
          height={isOpen ? 100 : 40}
          className="mx-auto"
        />
      </div>

      {/* Company Section */}
      <div
        onClick={() => setIsCompanyOpen(!isCompanyOpen)}
        style={{ width: "200px", height: "60px", position: "absolute", top: "80px" }}
        className="flex justify-between items-center cursor-pointer p-2 rounded-lg transition-colors duration-300 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100"
      >
        <div className="flex items-center space-x-2">
          <Image
            src="/küçüklogo.svg"
            alt="Küçük Logo"
            width={isOpen ? 30 : 20}
            height={isOpen ? 30 : 20}
          />
          {isOpen && (
            <div>
              <h2 className="font-semibold">MSE General</h2>
              <p className="text-sm text-gray-400">Seçili Şube: Aktif</p>
            </div>
          )}
        </div>
        {isOpen && (
          <div>
            {isCompanyOpen ? (
              <FiChevronDown className="ml-2" />
            ) : (
              <FiChevronRight className="ml-2" />
            )}
          </div>
        )}
      </div>

      {/* Search Section */}
      <div
        className="flex items-center bg-white border border-gray-300 rounded-lg p-1"
        style={{ width: "222px", height: "38px", position: "absolute", left: "17px", top: "150px" }}
      >
        <FiSearch className="text-gray-500" />
        {isOpen && (
          <input
            className="ml-2 bg-white outline-none w-full text-gray-900"
            placeholder="Search..."
          />
        )}
      </div>

      {/* Menü Öğeleri */}
      <ul
        className="flex-1 overflow-auto"
        style={{ width: "223px", height: "314px", position: "absolute", left: "17px", top: "200px" }}
      >
        <SidebarItem
          title="Dashboard"
          dropdown={false}
          icon="/Vectordashboard.svg"
          isActive={activeIndex === 0}
          onClick={() => handleItemClick(0)}
        />
        <SidebarItem
          title="Group Analysis"
          dropdown={true}
          items={["Analysis 1", "Analysis 2"]}
          icon="/Vectorgroup.svg"
          isActive={activeIndex === 1}
          onClick={() => handleItemClick(1)}
        />
        <SidebarItem
          title="Guest Relations"
          dropdown={true}
          items={["Guest 1", "Guest 2"]}
          icon="/Vectorguest.svg"
          isActive={activeIndex === 2}
          onClick={() => handleItemClick(2)}
        />
        <SidebarItem
          title="Settings"
          dropdown={true}
          items={["Profile", "Account Settings"]}
          icon="/Vectorsettings.svg"
          isActive={activeIndex === 3}
          onClick={() => handleItemClick(3)}
        />
        <SidebarItem
          title="Integrations"
          dropdown={true}
          items={["Integration 1", "Integration 2"]}
          icon="/Vectorintegrations.svg"
          isActive={activeIndex === 4}
          onClick={() => handleItemClick(4)}
        />
        <SidebarItem
          title="Log"
          dropdown={true}
          items={["Log 1", "Log 2"]}
          icon="/Vectorlog.svg"
          isActive={activeIndex === 5}
          onClick={() => handleItemClick(5)}
        />
        <SidebarItem
          title="Modules"
          dropdown={true}
          items={["Module 1", "Module 2"]}
          icon="/Vectormodules.svg"
          isActive={activeIndex === 6}
          onClick={() => handleItemClick(6)}
        />
      </ul>

      {/* Support, English, Version */}
      <div
        style={{
          width: "222px",
          height: "130px",
          position: "absolute",
          left: "16px",
          top: "560px",
        }}
      >
        <div className="flex items-center space-x-2 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100 transition-all duration-300 cursor-pointer border border-transparent rounded-lg p-2">
          <img src="/Vectorsupport.svg" alt="Support Icon" className="w-6 h-6" />
          {isOpen && <span>Support</span>}
        </div>
        <div className="flex items-center space-x-2 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100 transition-all duration-300 cursor-pointer border border-transparent rounded-lg p-2">
          <img src="/Vectorenglish.svg" alt="Language Icon" className="w-6 h-6" />
          {isOpen && <span>English</span>}
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <img src="/Vectorversion.svg" alt="Version Icon" className="w-6 h-6" />
          {isOpen && <span>v12.5.23</span>}
        </div>
      </div>

      {/* Kullanıcı Profili Kısmı */}
      <div
        className="flex items-center space-x-2"
        style={{ width: "256px", height: "66px", position: "absolute", top: "670px" }}
      >
        <img src="/profil.svg" alt="Profile Icon" className="w-8 h-8" />
        {isOpen && (
          <div>
            <h2 className="font-semibold">Murat Tenil</h2>
            <p className="text-xs text-gray-500">murattenil@icloud.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

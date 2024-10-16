"use client";
import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronRight, FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from 'next/link';

// SidebarItem bileşeni için prop tiplerini güncelleyelim
interface SidebarItemProps {
  title: string;
  dropdown: boolean;
  items?: { title: string; href: string }[]; // string[] yerine obje dizisi
  icon: string;
  isActive: boolean;
  isCurrentPage: boolean;
  onClick: () => void;
  iconColor?: string;
  iconSize?: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  title, 
  dropdown, 
  items = [], 
  icon, 
  isActive, 
  isCurrentPage, 
  onClick, 
  iconColor = 'text-gray-500',
  href,
}) => {
  return (
    <div>
      <Link href={href} passHref>
        <div
          onClick={onClick}
          className={`flex justify-between items-center cursor-pointer p-2 rounded-lg transition-all duration-300 ${
            isCurrentPage ? 'bg-gray-200 text-gray-700 shadow-lg' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-200 hover:shadow-lg'
          }`}
        >
          <div className="flex items-center space-x-2">
            <div 
              className={`w-4 h-4 bg-current mask-icon ${isCurrentPage ? 'text-gray-800' : 'text-gray-500'}`}
              style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
            />
            <span className={isCurrentPage ? 'font-medium' : ''}>{title}</span>
          </div>
          {dropdown ? (
            isActive ? (
              <FiChevronDown className="ml-2" />
            ) : (
              <FiChevronRight className="ml-2" />
            )
          ) : null}
        </div>
      </Link>
      {isActive && dropdown && items && items.length > 0 && (
        <ul className="pl-4">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href} passHref>
                <div className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:opacity-100">
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Sidebar için prop tiplerini tanımlayalım
interface SidebarProps {
  isOpen: boolean;
  currentPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentPage }) => {
  // Sadece bir item'in açık kalması için activeIndex kullanıyoruz
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("Aktif");
  const [branches] = useState<string[]>(["Aktif", "Lara Şubesi", "Side Şubesi"]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleBranchSelect = (branch: string) => {
    setSelectedBranch(branch);
    setIsCompanyOpen(false);
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white shadow-lg transition-all duration-300 flex flex-col h-screen fixed left-0 top-0`}
    >
      <div className="flex-grow overflow-y-auto p-4">
        {/* MSE Teknoloji Logosu */}
        <div className="mb-4">
          <Image
            src="/büyüklogo.svg"
            alt="MSE Teknoloji"
            width={isOpen ? 180 : 36}
            height={isOpen ? 90 : 36}
            className="mx-auto"
          />
        </div>

        {/* Company Section */}
        <div className="mb-4 relative" ref={dropdownRef}>
          <div
            onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            className="flex justify-between items-center cursor-pointer p-2 rounded-lg transition-colors duration-300 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100"
          >
            <div className="flex items-center space-x-2">
              <Image
                src="/küçüklogo.svg"
                alt="Küçük Logo"
                width={isOpen ? 24 : 16}
                height={isOpen ? 24 : 16}
              />
              {isOpen && (
                <div className="w-32 overflow-hidden">
                  <h2 className="font-semibold truncate">MSE General</h2>
                  <p className="text-sm text-gray-400 truncate">Seçili Şube: {selectedBranch}</p>
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
          {isCompanyOpen && isOpen && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {branches.map((branch, index) => (
                <div
                  key={index}
                  onClick={() => handleBranchSelect(branch)}
                  className={`p-2 cursor-pointer transition-colors duration-300 ${
                    selectedBranch === branch ? 'bg-gray-200 text-black' : 'text-gray-500 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  {branch}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Section */}
        <div className="mb-4">
          <div
            className="flex items-center bg-white border border-gray-300 rounded-lg p-1"
            style={{ width: "222px", height: "38px", position: "absolute", left: "17px", top: "150px" }}
          >
            <FiSearch className="text-gray-500 w-4 h-4" />
            {isOpen && (
              <input
                className="ml-2 bg-white outline-none w-full text-gray-900"
                placeholder="Search..."
              />
            )}
          </div>
        </div>

        {/* Menü Öğeleri */}
        <ul className="space-y-2 mt-16">
          <SidebarItem
            title="Dashboard"
            dropdown={false}
            icon="/Vectordashboard.svg"
            isActive={activeIndex === 0}
            isCurrentPage={currentPage === 'dashboard'}
            onClick={() => handleItemClick(0)}
            iconColor={currentPage === 'dashboard' ? 'text-black' : 'text-gray-800'}
            href="/dashboard"
          />
          <SidebarItem
            title="Group Analysis"
            dropdown={false}
            icon="/Vectorgroup.svg"
            isActive={activeIndex === 1}
            isCurrentPage={currentPage === 'group-analysis'}
            onClick={() => handleItemClick(1)}
            href="/group-analysis"
          />
          <SidebarItem
            title="Guest Relations"
            dropdown={false}
            icon="/Vectorguest.svg"
            iconSize="w-4 h-5"
            isActive={activeIndex === 2}
            isCurrentPage={currentPage === 'guest-relations'}
            onClick={() => handleItemClick(2)}
            href="/guest-relations"
          />
          <SidebarItem
            title="Settings"
            dropdown={true}
            items={[
              { title: "Profile", href: "/settings/profile" },
              { title: "Account Settings", href: "/settings/account-settings" }
            ]}
            icon="/Vectorsettings.svg"
            isActive={activeIndex === 3}
            isCurrentPage={currentPage === 'settings'}
            onClick={() => handleItemClick(3)}
            href="/settings"
          />
          <SidebarItem
            title="Reports"
            dropdown={false}
            icon="/Vectorreports.svg"
            isActive={activeIndex === 4}
            isCurrentPage={currentPage === 'reports'}
            onClick={() => handleItemClick(4)}
            href="/reports"
          />
          <SidebarItem
            title="Integrations"
            dropdown={true}
            items={[
              { title: "Integration 1", href: "/integrations/integration1" },
              { title: "Integration 2", href: "/integrations/integration2" }
            ]}
            icon="/Vectorintegrations.svg"
            isActive={activeIndex === 5}
            isCurrentPage={currentPage === 'integrations'}
            onClick={() => handleItemClick(5)}
            href="/integrations"
          />
          <SidebarItem
            title="Log"
            dropdown={true}
            items={[
              { title: "Log 1", href: "/log/log1" },
              { title: "Log 2", href: "/log/log2" }
            ]}
            icon="/Vectorlog.svg"
            isActive={activeIndex === 6}
            isCurrentPage={currentPage === 'log'}
            onClick={() => handleItemClick(6)}
            href="/log"
          />
          <SidebarItem
            title="Modules"
            dropdown={true}
            items={[
              { title: "Module 1", href: "/modules/module1" },
              { title: "Module 2", href: "/modules/module2" }
            ]}
            icon="/Vectormodules.svg"
            isActive={activeIndex === 7}
            isCurrentPage={currentPage === 'modules'}
            onClick={() => handleItemClick(7)}
            href="/modules"
          />
        </ul>
      </div>

      {/* Footer kısmı */}
      <div className="p-4 border-gray-200">
        {/* Support, English, Version */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center space-x-2 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100 transition-all duration-300 cursor-pointer border border-transparent rounded-lg p-2">
            <img src="/Vectorsupport.svg" alt="Support Icon" className="w-4 h-4" />
            {isOpen && <span className="text-sm">Support</span>}
          </div>
          <div className="flex items-center space-x-2 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100 transition-all duration-300 cursor-pointer border border-transparent rounded-lg p-2">
            <img src="/Vectorenglish.svg" alt="Language Icon" className="w-4 h-4" />
            {isOpen && <span className="text-sm">English</span>}
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <img src="/Vectorversion.svg" alt="Version Icon" className="w-4 h-4" />
            {isOpen && <span className="text-sm">v12.5.23</span>}
          </div>
        </div>

        {/* Kullanıcı Profili Kısmı */}
        <div className="flex border-t items-center space-x-2">
          <img src="/profil.svg" alt="Profile Icon" className="w-6 h-6" />
          {isOpen && (
            <div>
              <h2 className="font-semibold text-sm">Murat Tenil</h2>
              <p className="text-xs text-gray-500">murattenil@icloud.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

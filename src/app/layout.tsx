"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getCurrentPage = () => {
    switch(pathname) {
      case '/':
        return 'dashboard';
      case '/group-analysis':
        return 'group-analysis';
      case '/guest-relations':
        return 'guest-relations';
      case '/settings':
        return 'settings';
      case '/reports':
        return 'reports';
      case '/integrations':
        return 'integrations';
      case '/log':
        return 'log';
      case '/modules':
        return 'modules';
      default:
        return 'dashboard';
    }
  };

  return (
    <html lang="tr" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="flex">
          {/* Sidebar */}
          <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
            <Sidebar isOpen={isSidebarOpen} currentPage={getCurrentPage()} />
          </div>
          
          {/* Main Content */}
          <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
            <Header toggleSidebar={toggleSidebar} />
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

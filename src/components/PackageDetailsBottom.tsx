import React from "react";

export default function PackageDetailsBottom({ className = "" }: PackageDetailsBottomProps) {
  return (
    <div
      className={`font-inter flex flex-col sm:flex-row w-full items-start sm:items-center 
      gap-y-4 sm:gap-x-4 leading-[normal] tracking-[0px] 
      border border-gray-300 rounded-lg p-4 mt-6 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:flex-grow items-start sm:items-center gap-y-2 sm:gap-x-4">
        <div className="text-[17px] font-medium leading-[normal] text-gray-700 whitespace-nowrap">
          License
        </div>
        <div className="flex-grow hidden sm:block" />
        <div className="text-xs leading-[normal] text-slate-500 whitespace-nowrap">
          10 Month 10 Days Left
        </div>
        <div className="flex-grow hidden sm:block" />
        <div className="text-xs leading-[normal] text-slate-500 whitespace-nowrap">
          End date: 28.08.2025
        </div>
      </div>
      <div className="flex-grow hidden sm:block" />
      <button className="w-full sm:w-auto flex items-center justify-center self-stretch rounded-lg border border-solid border-blue-600 px-[9px] py-[5px] mt-4 sm:mt-0 [background-image:linear-gradient(180deg,_#4676e8,_#205ce4)] [box-shadow:inset_0px_-1px_4px_0px_rgba(30,80,191,1),inset_0px_1.5px_2px_0px_rgba(181,200,246,1)]">
        <div className="text-center text-sm font-medium leading-[normal] text-white">
          Package Details
        </div>
      </button>
    </div>
  );
}

interface PackageDetailsBottomProps {
  className?: string;
}

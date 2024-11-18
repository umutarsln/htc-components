import React from "react";

export default function PackageDetailsBottom({ className = "" }: PackageDetailsBottomProps) {
  return (
    <div
      className={`font-inter flex flex-col lg:flex-row w-full items-start lg:items-center gap-y-1 lg:gap-x-4  border border-gray-300 rounded-lg lg:rounded-md p-3 lg:p-5 mt-1 lg:mt-5${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:flex-grow items-start lg:items-center gap-y-1 lg:gap-x-4">
        <div className="text-lg lg:text-base font-medium text-gray-700 ">
          License
        </div>
        <div className="flex-grow hidden sm:block" />
        <div className="text-base lg:text-sm text-slate-500 ">
          10 Month 10 Days Left
        </div>
        <div className="flex-grow hidden sm:block" />
        <div className="text-base lg:text-sm  text-slate-500 ">
          End date: 28.08.2025
        </div>
      </div>
      <div className="flex-grow hidden sm:block" />
      <button className="w-full lg:w-auto flex items-center justify-center self-stretch rounded-lg border border-solid border-blue-600 px-[9px] py-[8px] mt-4 sm:mt-0 [background-image:linear-gradient(180deg,_#4676e8,_#205ce4)] [box-shadow:inset_0px_-1px_4px_0px_rgba(30,80,191,1),inset_0px_1.5px_2px_0px_rgba(181,200,246,1)]">
        <div className="text-center text-base lg:text-sm font-medium  text-white">
          Package Details
        </div>
      </button>
    </div>
  );
}

interface PackageDetailsBottomProps {
  className?: string;
}

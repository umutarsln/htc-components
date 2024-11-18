import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { IoMdArrowDropup, IoMdMore } from 'react-icons/io';
import 'react-circular-progressbar/dist/styles.css';

const GuestMonitoringWidget = () => {
  const activeGuests = 8040;
  const inactiveGuests = 4000;
  const totalGuests = activeGuests + inactiveGuests;
  const percentageIncrease = 60.4; 

  return (
    <div className="flex flex-col bg-white p-2 lg:p-4 rounded-lg lg:rounded-md lg:shadow-lg shadow-md border border-gray-200 h-full relative">
      <div className="absolute top-2 right-2">
        <button className="text-gray-500 hover:text-gray-700">
          <IoMdMore size={24} />
        </button>
      </div>
      <div className="flex flex-col border-b border-gray-200 mb-3 lg:mb-6">
        <h2 className="lg:text-md text-xl font-semibold">Guest Monitoring</h2>
        <p className="lg:text-sm  text-xl text-gray-500 mb-2 lg:mb-4">You're seeing active and inactive users.</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-60 h-24 relative">
          <CircularProgressbarWithChildren
            value={(activeGuests / totalGuests) * 100}
            styles={buildStyles({
              rotation: 0.75,
              strokeLinecap: 'round',
              pathColor: '#3B82F6',
              trailColor: '#E5E7EB',
            })}
            circleRatio={0.5}
          >
            <div className="flex flex-col items-center absolute pb-12  lg:pb-10 ">
              <div className="text-xl lg:text-lg text-gray-400">Total Guests</div>
              <div className="text-2xl lg:text-xl text-gray-600 font-semibold ">{totalGuests}</div>
            </div>
          </CircularProgressbarWithChildren>
          <div className="absolute top-0 right-0 text-green-500 flex items-center text-lg lg:text-sm">
              <IoMdArrowDropup size={16} />
              <span className="font-semibold">{percentageIncrease}%</span>
            </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 lg:mt-8 py-8 lg:py-12 text-lg lg:text-sm">
        <div className="pl-4 lg:pl-8 flex items-center">
          <div className="lg:w-2 lg:h-7 w-2 h-8  bg-blue-500 mr-2 lg:mr-1 rounded-lg lg:rounded-md"></div>
          <div>
            <span className="text-gray-500 text-lg lg:text-base ">Active </span>
            <span className="text-black font-semibold">{activeGuests.toLocaleString()}</span>
          </div>
        </div>
        <div className="pr-4 lg:pr-8 flex items-center">
          <div className="lg:w-2 lg:h-7 w-2 h-8 bg-blue-300 mr-2 lg:mr-1 rounded-lg lg:rounded-md"></div>
          <div>
            <span className="text-gray-500 text-lg lg:text-base">Inactive </span>
            <span className="text-black font-semibold">{inactiveGuests.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestMonitoringWidget;

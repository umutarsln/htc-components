import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { IoMdArrowDropup } from 'react-icons/io';
import 'react-circular-progressbar/dist/styles.css';

const GuestMonitoringWidget = () => {
  const activeGuests = 8040;
  const inactiveGuests = 4000;
  const totalGuests = activeGuests + inactiveGuests;
  const percentageIncrease = 60.4; 

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200" style={{ width: 380, height: 300 }}>
      <h2 className="text-md font-semibold">Guest Monitoring</h2>
      <p className="text-sm text-gray-500 mb-4">You're seeing active and inactive users.</p>
      <div className="flex items-center justify-center">
        <div style={{ width: 120, height: 120 }}>
          <CircularProgressbarWithChildren
            value={(activeGuests / totalGuests) * 100}
            styles={buildStyles({
              pathColor: '#3B82F6',
              trailColor: '#E5E7EB',
              strokeLinecap: 'round',
            })}
          >
            <div className="text-lg font-semibold">{totalGuests}</div>
            <div className="text-sm text-gray-500">Total Guests</div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="ml-4 text-green-500 flex items-center">
          <IoMdArrowDropup size={24} />
          <span className="text-lg font-semibold">{percentageIncrease}%</span>
        </div>
      </div>
      <div className="flex justify-between mt-4 text-sm">
        <div className="text-blue-500 font-semibold">
          Active {activeGuests.toLocaleString()}
        </div>
        <div className="text-gray-500 font-semibold">
          Inactive {inactiveGuests.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default GuestMonitoringWidget;

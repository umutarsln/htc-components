import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { FaDownload, FaUpload, FaMicrochip, FaMemory } from 'react-icons/fa';
import { IoMdArrowDropup } from 'react-icons/io';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const generateRandomData = (length: number, min: number, max: number) => {
  const randomData = [];
  for (let i = 0; i < length; i++) {
    randomData.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randomData;
};

const downloadData10Min = generateRandomData(8, 20, 70);
const uploadData10Min = generateRandomData(8, 10, 50);

const downloadData30Min = generateRandomData(7, 10, 80);
const uploadData30Min = generateRandomData(7, 5, 60);

const downloadData60Min = generateRandomData(6, 30, 90);
const uploadData60Min = generateRandomData(6, 20, 70);

const GuestTrafficChart = () => {
  const [timeRange, setTimeRange] = useState('10 min');

  const data10Min = {
    labels: ['00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '02:00'],
    datasets: [
      {
        label: 'Download',
        data: downloadData10Min,
        fill: false,
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        tension: 0.4,
      },
      {
        label: 'Upload',
        data: uploadData10Min,
        fill: false,
        borderColor: '#22C55E',
        backgroundColor: '#22C55E',
        tension: 0.4,
      },
    ],
  };

  const data30Min = {
    labels: ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00'],
    datasets: [
      {
        label: 'Download',
        data: downloadData30Min,
        fill: false,
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        tension: 0.4,
      },
      {
        label: 'Upload',
        data: uploadData30Min,
        fill: false,
        borderColor: '#22C55E',
        backgroundColor: '#22C55E',
        tension: 0.4,
      },
    ],
  };

  const data60Min = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
    datasets: [
      {
        label: 'Download',
        data: downloadData60Min,
        fill: false,
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        tension: 0.4,
      },
      {
        label: 'Upload',
        data: uploadData60Min,
        fill: false,
        borderColor: '#22C55E',
        backgroundColor: '#22C55E',
        tension: 0.4,
      },
    ],
  };

  const getData = () => {
    switch (timeRange) {
      case '10 min':
        return data10Min;
      case '30 min':
        return data30Min;
      case '60 min':
        return data60Min;
      default:
        return data10Min;
    }
  };

  const getAverage = (data: number[]) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return (sum / data.length).toFixed(1);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center md:justify-between border border-gray-200">
      <div className="w-full md:w-3/4">
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-semibold px-2">Guest Traffic</h2>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-md p-1 text-gray-500"
          >
            <option value="10 min">10 min</option>
            <option value="30 min">30 min</option>
            <option value="60 min">60 min</option>
          </select>
        </div>
        <Line data={getData()} options={options} />
      </div>
      <div className="w-full md:w-1/4 flex flex-col space-y-4 mt-4 md:mt-0">
        <InfoCard icon={<FaDownload />} label="Download" value={`${getAverage(getData().datasets[0].data as number[])} mbps`} percentage="9.2%" />
        <InfoCard icon={<FaUpload />} label="Upload" value={`${getAverage(getData().datasets[1].data as number[])} mbps`} percentage="9.2%" />
        <InfoCard icon={<FaMicrochip />} label="Processor" value="63.3 mbps" percentage="9.2%" />
        <InfoCard icon={<FaMemory />} label="Memory" value="63.3 mbps" percentage="9.2%" />
      </div>
    </div>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
  percentage,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  percentage: string;
}) => (
  <div className="flex items-center justify-between bg-gray-50 border border-gray-200 p-3 rounded-md">
    <div className="flex items-center space-x-2">
      <div className="text-xl text-gray-500">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-lg font-semibold">{value}</span>
      </div>
    </div>
    <div className="flex items-center text-green-500">
      <IoMdArrowDropup size={24} />
      <span>{percentage}</span>
    </div>
  </div>
);

export default GuestTrafficChart;

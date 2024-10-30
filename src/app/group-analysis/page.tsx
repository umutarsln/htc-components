"use client"
import HotelStats from '@/components/HotelStats';
import React from 'react';

const GroupAnalysis: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Grup Analizi</h1>
      <div className="flex flex-col gap-4">
        <HotelStats />
      </div>
    </div>
  );
};

export default GroupAnalysis;
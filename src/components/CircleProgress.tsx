import React from 'react';

interface CircleProgressProps {
  percentage: number;
  label: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage, label }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e6e6e6" // Arka plan rengi (gri)
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="orange" // Dairenin rengi
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.35s' }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fontSize="20px" 
          fill="orange" // Yüzdelik rengi
          fontWeight="bold"
        >
          {`${percentage}%`}
        </text>
      </svg>
      <div style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        {label}
      </div>
    </div>
  );
};

export default CircleProgress;

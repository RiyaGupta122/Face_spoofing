import React from 'react';

interface ProgressBarProps {
  value: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color }) => {
  // Map color names to Tailwind classes
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    amber: 'bg-amber-500',
    orange: 'bg-orange-500',
    indigo: 'bg-indigo-500',
  };
  
  const bgColorClass = colorMap[color] || 'bg-blue-500';
  
  // For metrics that should be low (like FPR, FNR), we cap at 10% for visualization
  // For metrics that should be high (accuracy, etc), we start at 90%
  const normalizedValue = value <= 10 ? value * 10 : value;
  
  return (
    <div className="w-full h-2 bg-slate-200 rounded overflow-hidden">
      <div 
        className={`h-full ${bgColorClass} transition-all duration-500 ease-out`} 
        style={{ width: `${normalizedValue}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
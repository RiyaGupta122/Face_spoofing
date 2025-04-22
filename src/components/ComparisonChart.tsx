import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ComparisonChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const comparisonData = {
    methods: [
      'Our GAN Model', 
      'Method A (2023)', 
      'Method B (2024)', 
      'Method C (2022)', 
      'Method D (2023)'
    ],
    metrics: {
      accuracy: [99.7, 98.3, 98.9, 97.1, 97.8],
      printAttack: [99.9, 99.2, 99.5, 98.7, 99.1],
      replayAttack: [99.8, 98.5, 99.1, 97.9, 98.2],
      mask3d: [99.4, 97.2, 97.8, 95.1, 96.3],
      deepfake: [98.9, 96.5, 97.3, 94.8, 95.7],
      processingTime: [45, 62, 40, 78, 55] // in milliseconds
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Overall Accuracy', 
              'Print Attack Detection', 
              'Replay Attack Detection', 
              '3D Mask Detection', 
              'Deepfake Detection', 
              'Speed (inverse ms)'
            ],
            datasets: [
              {
                label: 'Our GAN Model',
                data: [
                  comparisonData.metrics.accuracy[0],
                  comparisonData.metrics.printAttack[0],
                  comparisonData.metrics.replayAttack[0],
                  comparisonData.metrics.mask3d[0],
                  comparisonData.metrics.deepfake[0],
                  // Convert processing time to a comparable scale (100 - ms) so smaller is better
                  100 - comparisonData.metrics.processingTime[0]/2
                ],
                fill: true,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgb(59, 130, 246)',
                pointBackgroundColor: 'rgb(59, 130, 246)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(59, 130, 246)'
              },
              {
                label: 'Method B (2024)',
                data: [
                  comparisonData.metrics.accuracy[2],
                  comparisonData.metrics.printAttack[2],
                  comparisonData.metrics.replayAttack[2],
                  comparisonData.metrics.mask3d[2],
                  comparisonData.metrics.deepfake[2],
                  100 - comparisonData.metrics.processingTime[2]/2
                ],
                fill: true,
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderColor: 'rgb(16, 185, 129)',
                pointBackgroundColor: 'rgb(16, 185, 129)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(16, 185, 129)'
              },
              {
                label: 'Method A (2023)',
                data: [
                  comparisonData.metrics.accuracy[1],
                  comparisonData.metrics.printAttack[1],
                  comparisonData.metrics.replayAttack[1],
                  comparisonData.metrics.mask3d[1],
                  comparisonData.metrics.deepfake[1],
                  100 - comparisonData.metrics.processingTime[1]/2
                ],
                fill: true,
                backgroundColor: 'rgba(249, 115, 22, 0.2)',
                borderColor: 'rgb(249, 115, 22)',
                pointBackgroundColor: 'rgb(249, 115, 22)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(249, 115, 22)'
              }
            ],
          },
          options: {
            elements: {
              line: {
                borderWidth: 3
              }
            },
            scales: {
              r: {
                angleLines: {
                  display: true
                },
                suggestedMin: 90,
                suggestedMax: 100,
                ticks: {
                  callback: function(value) {
                    // For the Speed metric, convert back to ms
                    // Last label is for speed
                    return value + '%';
                  },
                  backdropColor: 'rgba(255, 255, 255, 0.75)'
                }
              }
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    
                    // Handle speed differently
                    if (context.parsed.r && context.label === 'Speed (inverse ms)') {
                      // Convert back to ms for display
                      const ms = Math.round(100 - context.parsed.r) * 2;
                      label += ms + 'ms';
                    } else {
                      label += context.parsed.r.toFixed(1) + '%';
                    }
                    
                    return label;
                  }
                }
              }
            }
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto">
        <canvas ref={chartRef} height="300"></canvas>
      </div>
      
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Accuracy
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Print
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Replay
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                3D Mask
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Deepfake
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Speed (ms)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {comparisonData.methods.map((method, index) => (
              <tr key={index} className={index === 0 ? "bg-blue-50" : ""}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  {method}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  <span className={index === 0 ? "font-semibold text-blue-600" : ""}>
                    {comparisonData.metrics.accuracy[index]}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  <span className={index === 0 ? "font-semibold text-blue-600" : ""}>
                    {comparisonData.metrics.printAttack[index]}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  <span className={index === 0 ? "font-semibold text-blue-600" : ""}>
                    {comparisonData.metrics.replayAttack[index]}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  <span className={index === 0 ? "font-semibold text-blue-600" : ""}>
                    {comparisonData.metrics.mask3d[index]}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  <span className={index === 0 ? "font-semibold text-blue-600" : ""}>
                    {comparisonData.metrics.deepfake[index]}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  <span className={index === 0 ? "font-semibold text-blue-600" : ""}>
                    {comparisonData.metrics.processingTime[index]}ms
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonChart;
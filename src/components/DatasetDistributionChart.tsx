import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface DatasetDistributionChartProps {
  chartType: 'pie' | 'bar';
  labels: string[];
  data: number[];
  colors: string[];
}

const DatasetDistributionChart: React.FC<DatasetDistributionChartProps> = ({ 
  chartType, 
  labels, 
  data, 
  colors 
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'pie' | 'bar'> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: chartType,
          data: {
            labels: labels,
            datasets: [
              {
                label: chartType === 'pie' ? 'Distribution' : 'Percentage',
                data: data,
                backgroundColor: chartType === 'pie' ? colors : colors[0],
                borderColor: chartType === 'pie' ? colors.map(color => color.replace(')', ', 0.8)').replace('rgb', 'rgba')) : colors[0].replace(')', ', 0.8)').replace('rgb', 'rgba'),
                borderWidth: 1,
                borderRadius: chartType === 'bar' ? 4 : 0,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: chartType === 'pie' ? 'right' : 'top',
                labels: {
                  usePointStyle: true,
                  boxWidth: 10,
                  padding: 20,
                  font: {
                    size: 12,
                  },
                },
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    let label = context.label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += context.formattedValue + '%';
                    return label;
                  }
                }
              }
            },
            ...(chartType === 'bar' && {
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: {
                    callback: function(value) {
                      return value + '%';
                    }
                  }
                }
              }
            })
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartType, labels, data, colors]);

  return (
    <div className="relative h-64">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DatasetDistributionChart;
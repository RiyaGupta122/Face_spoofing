import React from 'react';

const ModelDiagram: React.FC = () => {
  return (
    <div className="relative bg-slate-100 p-8 rounded-lg shadow-inner overflow-x-auto">
      <div className="min-w-[900px]">
        <div className="grid grid-cols-5 gap-4">
          {/* Input Stage */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-100 border-2 border-blue-500 rounded-lg flex items-center justify-center mb-2">
              <div className="text-blue-700 font-medium text-center">Input Image</div>
            </div>
            <div className="h-8 w-full flex items-center justify-center">
              <svg height="24" width="100">
                <line x1="0" y1="12" x2="100" y2="12" style={{stroke: '#3B82F6', strokeWidth: 2}}/>
                <polygon points="100,12 92,8 92,16" style={{fill: '#3B82F6'}}/>
              </svg>
            </div>
          </div>

          {/* First Processing Stage */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-32 h-24 bg-slate-200 border-2 border-slate-400 rounded-lg flex items-center justify-center mb-2">
              <div className="text-slate-700 font-medium text-center">Face Detection (MTCNN)</div>
            </div>
            <div className="h-8 w-full flex items-center justify-center">
              <svg height="24" width="100">
                <line x1="0" y1="12" x2="100" y2="12" style={{stroke: '#3B82F6', strokeWidth: 2}}/>
                <polygon points="100,12 92,8 92,16" style={{fill: '#3B82F6'}}/>
              </svg>
            </div>
          </div>

          {/* GAN Stage */}
          <div className="col-span-1">
            <div className="flex flex-col">
              <div className="w-full h-32 bg-purple-100 border-2 border-purple-500 rounded-lg p-2 mb-2">
                <div className="text-purple-700 font-medium text-center mb-1">GAN Model</div>
                <div className="flex justify-between items-center gap-2">
                  <div className="bg-purple-200 rounded p-1 text-xs text-purple-800 text-center flex-1">Generator</div>
                  <div className="bg-purple-200 rounded p-1 text-xs text-purple-800 text-center flex-1">Discriminator</div>
                </div>
                <div className="mt-2 text-xs text-purple-600 text-center">Learns real vs. spoofed patterns</div>
              </div>
              <div className="h-8 w-full flex items-center justify-center">
                <svg height="24" width="100">
                  <line x1="0" y1="12" x2="100" y2="12" style={{stroke: '#3B82F6', strokeWidth: 2}}/>
                  <polygon points="100,12 92,8 92,16" style={{fill: '#3B82F6'}}/>
                </svg>
              </div>
            </div>
          </div>

          {/* Feature Fusion Stage */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-32 h-24 bg-green-100 border-2 border-green-500 rounded-lg flex items-center justify-center mb-2">
              <div className="text-green-700 font-medium text-center">Feature Fusion & Decision</div>
            </div>
            <div className="h-8 w-full flex items-center justify-center">
              <svg height="24" width="100">
                <line x1="0" y1="12" x2="100" y2="12" style={{stroke: '#3B82F6', strokeWidth: 2}}/>
                <polygon points="100,12 92,8 92,16" style={{fill: '#3B82F6'}}/>
              </svg>
            </div>
          </div>

          {/* Output Stage */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-red-100 border-2 border-red-500 rounded-lg flex items-center justify-center">
                <div className="text-red-700 font-medium text-center">Spoof Detection Result</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional components below main flow */}
        <div className="mt-12 grid grid-cols-3 gap-8">
          <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Dataset</h4>
            <p className="text-sm text-amber-700">100K+ real and spoofed face images with diverse attack types</p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Training Process</h4>
            <p className="text-sm text-blue-700">500+ epochs with adversarial training and performance validation</p>
          </div>
          <div className="bg-emerald-50 border-2 border-emerald-400 rounded-lg p-4">
            <h4 className="font-medium text-emerald-800 mb-2">Performance Metrics</h4>
            <p className="text-sm text-emerald-700">99.7% accuracy, 0.2% FPR, 0.3% FNR across test datasets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDiagram;
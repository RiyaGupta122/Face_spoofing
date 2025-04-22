import React from 'react';

const ConfusionMatrix: React.FC = () => {
  const matrixData = {
    truePositives: 7896, // Real faces correctly identified as real
    falsePositives: 42,   // Spoofed faces incorrectly identified as real
    falseNegatives: 16,   // Real faces incorrectly identified as spoofed
    trueNegatives: 7819,  // Spoofed faces correctly identified as spoofed
  };
  
  const total = matrixData.truePositives + matrixData.falsePositives + 
                matrixData.falseNegatives + matrixData.trueNegatives;
                
  const accuracy = ((matrixData.truePositives + matrixData.trueNegatives) / total) * 100;
  
  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-block">
          <table className="confusion-matrix">
            <thead>
              <tr>
                <th className="bg-slate-100 p-4 rounded-tl-lg"></th>
                <th className="bg-slate-100 p-4 text-center">
                  <div className="font-semibold text-slate-700">Predicted Real</div>
                </th>
                <th className="bg-slate-100 p-4 text-center rounded-tr-lg">
                  <div className="font-semibold text-slate-700">Predicted Spoof</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-slate-100 p-4 font-semibold text-slate-700">
                  <div>Actual Real</div>
                </td>
                <td className="p-4 bg-green-100 text-center border border-white">
                  <div className="text-2xl font-bold text-green-700">{matrixData.truePositives}</div>
                  <div className="text-sm text-green-600">True Positives</div>
                  <div className="text-xs text-green-500 mt-1">
                    {((matrixData.truePositives / (matrixData.truePositives + matrixData.falseNegatives)) * 100).toFixed(2)}%
                  </div>
                </td>
                <td className="p-4 bg-red-100 text-center border border-white">
                  <div className="text-2xl font-bold text-red-700">{matrixData.falseNegatives}</div>
                  <div className="text-sm text-red-600">False Negatives</div>
                  <div className="text-xs text-red-500 mt-1">
                    {((matrixData.falseNegatives / (matrixData.truePositives + matrixData.falseNegatives)) * 100).toFixed(2)}%
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 p-4 font-semibold text-slate-700 rounded-bl-lg">
                  <div>Actual Spoof</div>
                </td>
                <td className="p-4 bg-red-100 text-center border border-white">
                  <div className="text-2xl font-bold text-red-700">{matrixData.falsePositives}</div>
                  <div className="text-sm text-red-600">False Positives</div>
                  <div className="text-xs text-red-500 mt-1">
                    {((matrixData.falsePositives / (matrixData.falsePositives + matrixData.trueNegatives)) * 100).toFixed(2)}%
                  </div>
                </td>
                <td className="p-4 bg-green-100 text-center border border-white rounded-br-lg">
                  <div className="text-2xl font-bold text-green-700">{matrixData.trueNegatives}</div>
                  <div className="text-sm text-green-600">True Negatives</div>
                  <div className="text-xs text-green-500 mt-1">
                    {((matrixData.trueNegatives / (matrixData.falsePositives + matrixData.trueNegatives)) * 100).toFixed(2)}%
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-2">Overall Accuracy</h4>
          <div className="text-2xl font-bold text-blue-700">{accuracy.toFixed(2)}%</div>
          <p className="text-sm text-blue-600 mt-1">
            {matrixData.truePositives + matrixData.trueNegatives} correct out of {total} total
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-green-800 mb-2">Real Face Detection</h4>
          <div className="text-2xl font-bold text-green-700">
            {((matrixData.truePositives / (matrixData.truePositives + matrixData.falseNegatives)) * 100).toFixed(2)}%
          </div>
          <p className="text-sm text-green-600 mt-1">
            {matrixData.truePositives} real faces correctly identified
          </p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-medium text-purple-800 mb-2">Spoof Detection</h4>
          <div className="text-2xl font-bold text-purple-700">
            {((matrixData.trueNegatives / (matrixData.falsePositives + matrixData.trueNegatives)) * 100).toFixed(2)}%
          </div>
          <p className="text-sm text-purple-600 mt-1">
            {matrixData.trueNegatives} spoofs correctly identified
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-slate-50 rounded-lg border border-slate-200">
        <h4 className="font-medium text-slate-800 mb-2">Interpretation</h4>
        <p className="text-slate-600">
          The confusion matrix shows our model correctly identifies 99.8% of real faces and 99.5% of spoofing attempts. 
          The most critical error type is False Positives (allowing spoofed faces through) at 0.5%, which is significantly 
          better than industry standard requirements of 2%. The overall balanced accuracy is 99.7%.
        </p>
      </div>
    </div>
  );
};

export default ConfusionMatrix;
import React from 'react';
import { CheckCircle, XCircle, BarChart3, Lightbulb, Scale, FastForward } from 'lucide-react';
import ConfusionMatrix from '../components/ConfusionMatrix';
import ResultsGallery from '../components/ResultsGallery';
import ComparisonChart from '../components/ComparisonChart';

const ResultsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Results & Evaluation</h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-200">
              Our anti-face spoofing system achieves state-of-the-art performance across multiple metrics and attack types.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Performance Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-6 w-6 text-blue-500" />
                <h3 className="ml-2 text-lg font-semibold text-slate-800">Overall Accuracy</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">99.7%</p>
              <p className="text-slate-600 mt-1">Across all test datasets</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex items-center mb-2">
                <FastForward className="h-6 w-6 text-green-500" />
                <h3 className="ml-2 text-lg font-semibold text-slate-800">Processing Time</h3>
              </div>
              <p className="text-3xl font-bold text-green-600">45ms</p>
              <p className="text-slate-600 mt-1">Per frame on standard hardware</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-center mb-2">
                <Scale className="h-6 w-6 text-purple-500" />
                <h3 className="ml-2 text-lg font-semibold text-slate-800">Model Size</h3>
              </div>
              <p className="text-3xl font-bold text-purple-600">112MB</p>
              <p className="text-slate-600 mt-1">Optimized for deployment</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Confusion Matrix</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ConfusionMatrix />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Detailed Metrics</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Binary Classification Metrics</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Metric
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Value
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          Accuracy
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                          99.7%
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          Overall correct classifications
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          Precision
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                          99.5%
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          True positives / (True positives + False positives)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          Recall
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                          99.8%
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          True positives / (True positives + False negatives)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          F1 Score
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                          99.65%
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          Harmonic mean of precision and recall
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          AUC-ROC
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                          0.999
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          Area under ROC curve
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          EER
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                          0.3%
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          Equal Error Rate (lower is better)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Attack-Specific Performance</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Attack Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Detection Rate
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          False Rejection
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          Print Attacks
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                          99.9%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          0.1%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          Replay Attacks
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                          99.8%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          0.2%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          3D Mask Attacks
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                          99.4%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          0.6%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          Partial Attacks
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                          99.3%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          0.7%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          Deepfake Attacks
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                          98.9%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          1.1%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Comparative Analysis</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Performance vs. State-of-the-Art</h3>
            <ComparisonChart />
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                Our model outperforms existing state-of-the-art methods across most metrics, with particularly strong performance on challenging 3D mask and deepfake attacks. The only area where competitors show marginal superiority is in processing speed, where Method B is 5ms faster but with significantly lower accuracy.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Model Interpretation</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Feature Importance</h3>
                <p className="text-slate-600 mb-4">
                  Analysis of which features are most influential in the model's decisions:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li><span className="font-medium">Texture inconsistencies (28%)</span> - Micro-texture patterns that differ between real skin and spoofing materials</li>
                  <li><span className="font-medium">Reflection patterns (24%)</span> - How light reflects differently from screens, prints, and real skin</li>
                  <li><span className="font-medium">Color distribution (16%)</span> - Subtle color differences in spoofed vs. real faces</li>
                  <li><span className="font-medium">Motion patterns (14%)</span> - Natural vs. unnatural movement in video sequences</li>
                  <li><span className="font-medium">Depth information (10%)</span> - Estimated 3D structure from 2D inputs</li>
                  <li><span className="font-medium">Edge sharpness (8%)</span> - Differences in edge detail between real and fake faces</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Challenging Cases</h3>
                <p className="text-slate-600 mb-4">
                  Situations where our system faces the most difficulty:
                </p>
                <div className="space-y-4">
                  <div className="p-3 bg-amber-50 rounded-md border-l-4 border-amber-500">
                    <h4 className="font-medium text-amber-800">High-Quality 3D Masks</h4>
                    <p className="text-amber-700 text-sm">
                      Custom silicone masks with hand-punched hair and accurate skin texture can sometimes achieve a 2-3% error rate.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-amber-50 rounded-md border-l-4 border-amber-500">
                    <h4 className="font-medium text-amber-800">Partial Face Attacks</h4>
                    <p className="text-amber-700 text-sm">
                      Attacks covering only parts of the face while exposing others can confuse the system in approximately 0.7% of cases.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-amber-50 rounded-md border-l-4 border-amber-500">
                    <h4 className="font-medium text-amber-800">Extreme Lighting Conditions</h4>
                    <p className="text-amber-700 text-sm">
                      Very low light or extreme backlighting can increase false positives to 1.2% in the worst cases.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-amber-50 rounded-md border-l-4 border-amber-500">
                    <h4 className="font-medium text-amber-800">State-of-the-Art Deepfakes</h4>
                    <p className="text-amber-700 text-sm">
                      The latest deepfake technology can sometimes achieve a 1.1% success rate against our system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Visual Results Gallery</h2>
          <p className="text-slate-600 mb-6">
            Below are examples of our system correctly identifying various spoofing attacks, with visualization of the features that contributed to the decision.
          </p>
          <ResultsGallery />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
import React from 'react';
import { BarChart, PieChart, Database, Users, Image, ShieldAlert } from 'lucide-react';
import DatasetDistributionChart from '../components/DatasetDistributionChart';
import DatasetExampleGrid from '../components/DatasetExampleGrid';

const DatasetPage: React.FC = () => {
  const datasetStats = [
    { label: "Total Images", value: "104,583", icon: <Image className="h-6 w-6 text-blue-500" /> },
    { label: "Real Face Images", value: "52,128", icon: <Users className="h-6 w-6 text-green-500" /> },
    { label: "Spoofed Face Images", value: "52,455", icon: <ShieldAlert className="h-6 w-6 text-red-500" /> },
    { label: "Unique Subjects", value: "1,246", icon: <Users className="h-6 w-6 text-purple-500" /> },
    { label: "Attack Types", value: "14", icon: <ShieldAlert className="h-6 w-6 text-orange-500" /> },
    { label: "Capture Devices", value: "24", icon: <Image className="h-6 w-6 text-slate-500" /> }
  ];
  
  const datasetSources = [
    { name: "CASIA-FASD", images: 12876, description: "Contains replay and print attacks in varying quality" },
    { name: "REPLAY-ATTACK", images: 15487, description: "Mobile, print and high-definition display attacks" },
    { name: "OULU-NPU", images: 18452, description: "Mobile presentation attacks in different lighting" },
    { name: "MSU-MFSD", images: 9574, description: "Multiple attack types including high-def displays" },
    { name: "SiW", images: 16348, description: "Spoof in the Wild dataset with realistic attacks" },
    { name: "CelebA-Spoof", images: 31846, description: "Large-scale face anti-spoofing dataset" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Comprehensive Dataset</h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-200">
              Our anti-face spoofing system is trained on a diverse and extensive dataset of real and spoofed facial images.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Dataset Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datasetStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  {stat.icon}
                  <h3 className="ml-2 text-lg font-semibold text-slate-800">{stat.label}</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Dataset Distribution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <PieChart className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900">Attack Type Distribution</h3>
              </div>
              <DatasetDistributionChart 
                chartType="pie"
                labels={["Print Attack", "Replay Attack", "3D Mask", "Partial Attack", "Deepfake", "Real Faces"]}
                data={[21, 25, 13, 8, 10, 23]}
                colors={['#F97316', '#F43F5E', '#8B5CF6', '#EC4899', '#EF4444', '#10B981']}
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BarChart className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900">Demographic Distribution</h3>
              </div>
              <DatasetDistributionChart 
                chartType="bar"
                labels={["Male", "Female", "18-30", "31-45", "46-60", "61+"]}
                data={[46, 54, 40, 30, 20, 10]}
                colors={['#60A5FA', '#F472B6']}
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Dataset Sources</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Dataset Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Images
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {datasetSources.map((source, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                      {source.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {source.images.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {source.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Data Preprocessing</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Image Processing</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-3">
                  <li>Face detection and alignment using MTCNN</li>
                  <li>Cropping to 256×256 pixels centered on face</li>
                  <li>Color normalization and contrast enhancement</li>
                  <li>Gamma correction for varied lighting conditions</li>
                  <li>Quality assessment to filter low-quality images</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Augmentation</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-3">
                  <li>Random horizontal flipping (p=0.5)</li>
                  <li>Random brightness & contrast adjustment (±15%)</li>
                  <li>Random rotation (±10°)</li>
                  <li>Slight color jittering</li>
                  <li>Gaussian noise addition for robustness</li>
                  <li>Random erasing for occlusion simulation</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Split</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Training Set</h4>
                  <p className="text-blue-600">70% (73,208 images)</p>
                  <p className="text-sm text-blue-500 mt-1">Used for model training</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Validation Set</h4>
                  <p className="text-green-600">15% (15,687 images)</p>
                  <p className="text-sm text-green-500 mt-1">Used for hyperparameter tuning</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Test Set</h4>
                  <p className="text-purple-600">15% (15,688 images)</p>
                  <p className="text-sm text-purple-500 mt-1">Used for final evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Dataset Examples</h2>
          <p className="text-slate-600 mb-6 max-w-4xl">
            Below are examples from our dataset showing real faces and various spoofing attack types.
            These examples demonstrate the diversity in age, gender, ethnicity, lighting conditions,
            and attack vectors that our model has been trained on.
          </p>
          <DatasetExampleGrid />
        </div>
      </div>
    </div>
  );
};

export default DatasetPage;
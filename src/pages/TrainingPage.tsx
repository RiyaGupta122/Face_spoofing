import React from 'react';
import { LineChart, GitBranch, Cpu, Clock, Lightbulb } from 'lucide-react';
import TrainingMetricsChart from '../components/TrainingMetricsChart';
import ProgressBar from '../components/ProgressBar';

const TrainingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Training Process</h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-200">
              Our model underwent extensive training to achieve high accuracy and robustness against various spoofing attacks.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Training Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <GitBranch className="h-6 w-6 text-blue-500" />
                <h3 className="ml-2 text-lg font-semibold text-slate-800">Epochs</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">500</p>
              <p className="text-slate-600 mt-1">Total training epochs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <Clock className="h-6 w-6 text-blue-500" />
                <h3 className="ml-2 text-lg font-semibold text-slate-800">Training Time</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">168 hrs</p>
              <p className="text-slate-600 mt-1">On NVIDIA A100 GPU</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <Cpu className="h-6 w-6 text-blue-500" />
                <h3 className="ml-2 text-lg font-semibold text-slate-800">Batch Size</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">32</p>
              <p className="text-slate-600 mt-1">With gradient accumulation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <Lightbulb className="h-6 w-6 text-blue-500" />
                <h3 className="ml-2 text-lg font-semibold text-slate-800">Learning Rate</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">0.0002</p>
              <p className="text-slate-600 mt-1">With cosine annealing</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Training Progress</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TrainingMetricsChart />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Model Performance Throughout Training</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Key Performance Metrics</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Accuracy</span>
                    <span className="text-blue-600 font-medium">99.7%</span>
                  </div>
                  <ProgressBar value={99.7} color="blue" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">True Positive Rate</span>
                    <span className="text-green-600 font-medium">99.8%</span>
                  </div>
                  <ProgressBar value={99.8} color="green" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">True Negative Rate</span>
                    <span className="text-purple-600 font-medium">99.5%</span>
                  </div>
                  <ProgressBar value={99.5} color="purple" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">False Positive Rate</span>
                    <span className="text-red-600 font-medium">0.5%</span>
                  </div>
                  <ProgressBar value={0.5} color="red" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">False Negative Rate</span>
                    <span className="text-orange-600 font-medium">0.2%</span>
                  </div>
                  <ProgressBar value={0.2} color="orange" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Attack-Specific Performance</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Print Attacks</span>
                    <span className="text-blue-600 font-medium">99.9%</span>
                  </div>
                  <ProgressBar value={99.9} color="blue" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Replay Attacks</span>
                    <span className="text-green-600 font-medium">99.8%</span>
                  </div>
                  <ProgressBar value={99.8} color="green" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">3D Mask Attacks</span>
                    <span className="text-purple-600 font-medium">99.4%</span>
                  </div>
                  <ProgressBar value={99.4} color="purple" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Partial Attacks</span>
                    <span className="text-indigo-600 font-medium">99.3%</span>
                  </div>
                  <ProgressBar value={99.3} color="indigo" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Deepfake Attacks</span>
                    <span className="text-amber-600 font-medium">98.9%</span>
                  </div>
                  <ProgressBar value={98.9} color="amber" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Training Strategy</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Training Approach</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-3">
                  <li><span className="font-medium">Adversarial Training:</span> Generator and discriminator networks trained competitively to improve detection abilities</li>
                  <li><span className="font-medium">Multi-task Learning:</span> Joint optimization of spoofing detection and feature extraction</li>
                  <li><span className="font-medium">Curriculum Learning:</span> Training on easy examples first, then increasing difficulty</li>
                  <li><span className="font-medium">Domain Adaptation:</span> Ensuring performance across different cameras and environments</li>
                  <li><span className="font-medium">Transfer Learning:</span> Initializing with weights from face recognition models</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Optimization Details</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-3">
                  <li><span className="font-medium">Optimizer:</span> Adam with β₁=0.5, β₂=0.999</li>
                  <li><span className="font-medium">Learning Rate:</span> Initial 0.0002 with cosine annealing schedule</li>
                  <li><span className="font-medium">Weight Decay:</span> 1e-5 for regularization</li>
                  <li><span className="font-medium">Loss Function:</span> WGAN-GP loss with feature matching and pixel reconstruction</li>
                  <li><span className="font-medium">Gradient Clipping:</span> Max norm of 1.0 to prevent exploding gradients</li>
                  <li><span className="font-medium">Early Stopping:</span> Patience of 20 epochs on validation performance</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Training Challenges & Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-md">
                  <h4 className="font-medium text-orange-800 mb-2">GAN Mode Collapse</h4>
                  <p className="text-orange-700 text-sm">
                    Challenge: Generator producing limited variety of outputs
                  </p>
                  <p className="text-orange-700 text-sm mt-2">
                    Solution: Implemented mini-batch discrimination and feature matching loss
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-md">
                  <h4 className="font-medium text-purple-800 mb-2">Training Instability</h4>
                  <p className="text-purple-700 text-sm">
                    Challenge: Fluctuating loss values and erratic training
                  </p>
                  <p className="text-purple-700 text-sm mt-2">
                    Solution: Spectral normalization and gradient penalty to stabilize discriminator
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium text-blue-800 mb-2">Overfitting on Training Data</h4>
                  <p className="text-blue-700 text-sm">
                    Challenge: Poor generalization to unseen attack types
                  </p>
                  <p className="text-blue-700 text-sm mt-2">
                    Solution: Extensive data augmentation and dropout layers
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium text-green-800 mb-2">Compute Resource Limitations</h4>
                  <p className="text-green-700 text-sm">
                    Challenge: Large model and dataset requiring significant resources
                  </p>
                  <p className="text-green-700 text-sm mt-2">
                    Solution: Mixed precision training and gradient accumulation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Computational Resources</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Hardware</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>4× NVIDIA A100 40GB GPUs</li>
                  <li>AMD EPYC 7742 64-Core Processor</li>
                  <li>512GB System RAM</li>
                  <li>8TB NVMe Storage</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Software Stack</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Ubuntu 20.04 LTS</li>
                  <li>CUDA 11.6 / cuDNN 8.4.0</li>
                  <li>Python 3.9.10</li>
                  <li>PyTorch 1.10.2</li>
                  <li>NVIDIA Apex for mixed precision</li>
                  <li>MLflow for experiment tracking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Efficiency Metrics</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Training throughput: 128 images/sec</li>
                  <li>GPU memory usage: 35.6GB per GPU</li>
                  <li>Checkpoint size: 487MB</li>
                  <li>Inference model size: 112MB</li>
                  <li>FLOPs per inference: 8.7G</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Training Cost Analysis</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Resource
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Usage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Cost Estimate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        GPU Compute
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        672 GPU-hours (4 GPUs × 168 hours)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        $4,032 (at $6/GPU-hour)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        Storage
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        8TB for 1 month
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        $160 (at $20/TB-month)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        Network Egress
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        2TB for dataset distribution
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        $180 (at $0.09/GB)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        Total
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                        $4,372
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
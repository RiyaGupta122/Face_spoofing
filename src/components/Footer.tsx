import React from 'react';
import { Github as GitHub, BarChart, Database, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-lg">AntiFaceSpoofing</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Advanced face anti-spoofing technology using Generative Adversarial Networks and computer vision techniques to protect against presentation attacks.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Technical Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Download Dataset
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="https://github.com/RiyaGupta122/ANTI_FACE_SPOOFING_TECHNOLOGY" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <GitHub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <BarChart className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Database className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              © 2025 Anti-Face Spoofing Project. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
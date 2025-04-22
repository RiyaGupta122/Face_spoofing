import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#4B91F7 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Advanced Security Technology
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Anti-Face Spoofing<br/>
              <span className="text-blue-500">Using GAN Technology</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-xl">
              Our cutting-edge solution uses Generative Adversarial Networks and computer vision to detect and prevent facial presentation attacks with 99.7% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/architecture" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/results" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-white hover:bg-gray-100 transition-colors"
              >
                View Results
              </Link>
            </div>
          </div>
          
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5752724/pexels-photo-5752724.jpeg"
                alt="Face recognition technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent"></div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                <div className="grid grid-cols-3 gap-4 text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">99.7%</div>
                    <div className="text-xs">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs">Training Epochs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100K+</div>
                    <div className="text-xs">Dataset Size</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
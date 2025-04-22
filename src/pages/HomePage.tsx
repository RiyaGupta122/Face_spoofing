import React from 'react';
import { ArrowRight, Shield, Database, LineChart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import LiveAnalysis from '../components/LiveAnalysis';

const HomePage: React.FC = () => {
  const features = [
    {
      title: 'Advanced GAN Architecture',
      description: 'Our system employs a sophisticated Generative Adversarial Network architecture specifically designed to detect and prevent facial spoofing attacks.',
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      link: '/architecture'
    },
    {
      title: 'Comprehensive Dataset',
      description: 'Trained on over 100,000 real and spoofed facial images across diverse lighting conditions, ages, genders, and ethnicities.',
      icon: <Database className="h-10 w-10 text-blue-500" />,
      link: '/dataset'
    },
    {
      title: 'Rigorous Training Process',
      description: 'Extensive training over 500 epochs with continuous evaluation and optimization to ensure high accuracy and low false-positive rates.',
      icon: <LineChart className="h-10 w-10 text-blue-500" />,
      link: '/training'
    },
    {
      title: 'Real-Time Detection',
      description: 'Capable of identifying presentation attacks in real-time with 99.7% accuracy across multiple attack vectors.',
      icon: <Play className="h-10 w-10 text-blue-500" />,
      link: '/results'
    }
  ];

  return (
    <div>
      <HeroSection />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Try It Live</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Experience our anti-face spoofing technology in action using your webcam.
          </p>
        </div>
        
        <LiveAnalysis />
      </section>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Our anti-face spoofing technology combines advanced deep learning with computer vision to protect against increasingly sophisticated presentation attacks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
            />
          ))}
        </div>
      </section>
      
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Problem We're Solving</h2>
              <p className="text-lg text-slate-300 mb-6">
                As facial recognition becomes increasingly common for secure authentication, attackers are developing more sophisticated spoofing methods using printed photos, videos, masks, and deepfakes.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Our technology defends against these attacks by analyzing subtle visual patterns, texture inconsistencies, and behavioral cues that distinguish real faces from spoofed ones.
              </p>
              <Link 
                to="/architecture" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Learn About Our Architecture
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg" 
                alt="Face authentication technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 to-transparent flex items-end p-8">
                <span className="text-white text-xl font-semibold">Protecting facial recognition systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Performance Metrics</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Our system achieves industry-leading accuracy with minimal computational overhead.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">99.7%</div>
            <div className="text-xl font-medium text-slate-900 mb-1">Detection Accuracy</div>
            <p className="text-slate-600">Across all tested attack vectors</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">0.2%</div>
            <div className="text-xl font-medium text-slate-900 mb-1">False Positive Rate</div>
            <p className="text-slate-600">Industry-leading low error rate</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">45ms</div>
            <div className="text-xl font-medium text-slate-900 mb-1">Processing Time</div>
            <p className="text-slate-600">Per frame on standard hardware</p>
          </div>
        </div>
      </section>
      
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Explore the Technology?</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-8">
            Dive into our detailed documentation to understand how our anti-face spoofing system works and how it can be implemented in your security systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/architecture" 
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Explore Architecture
            </Link>
            <Link 
              to="/results" 
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-white hover:bg-gray-100 transition-colors"
            >
              View Results
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
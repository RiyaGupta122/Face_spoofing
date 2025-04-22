import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const ResultsGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('print');
  
  const resultExamples = {
    print: [
      {
        image: "https://images.pexels.com/photos/4467158/pexels-photo-4467158.jpeg",
        title: "Print Attack Detection",
        description: "Color inconsistency and texture patterns detected",
        confidence: 99.8,
        keyFeatures: ["Moiré patterns", "Light reflection inconsistency", "Micro-texture analysis"]
      },
      {
        image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg",
        title: "High-Quality Print Detection",
        description: "Detected despite professional photo paper",
        confidence: 98.7,
        keyFeatures: ["Edge sharpness analysis", "Color spectrum analysis", "Texture depth inconsistency"]
      }
    ],
    replay: [
      {
        image: "https://images.pexels.com/photos/7048043/pexels-photo-7048043.jpeg",
        title: "Smartphone Replay Attack",
        description: "Screen detected via reflection patterns",
        confidence: 99.9,
        keyFeatures: ["Screen flickering detection", "Color saturation analysis", "Pixel pattern recognition"]
      },
      {
        image: "https://images.pexels.com/photos/5053842/pexels-photo-5053842.jpeg",
        title: "Laptop Display Attack",
        description: "High-quality display still detected",
        confidence: 99.4,
        keyFeatures: ["Light emission patterns", "Screen edge detection", "RGB subpixel analysis"]
      }
    ],
    mask: [
      {
        image: "https://images.pexels.com/photos/5623835/pexels-photo-5623835.jpeg",
        title: "Silicone Mask Detection",
        description: "High-quality 3D mask with hair implants",
        confidence: 98.2,
        keyFeatures: ["Material elasticity analysis", "Pore pattern inconsistency", "3D structure estimation"]
      },
      {
        image: "https://images.pexels.com/photos/4226215/pexels-photo-4226215.jpeg",
        title: "Full-Face Mask Detection",
        description: "Complete face covering with eye cutouts",
        confidence: 99.5,
        keyFeatures: ["Eye region analysis", "Skin texture mapping", "Motion pattern inconsistency"]
      }
    ],
    deepfake: [
      {
        image: "https://images.pexels.com/photos/5926398/pexels-photo-5926398.jpeg",
        title: "Deepfake Detection",
        description: "AI-generated face with subtle artifacts",
        confidence: 97.8,
        keyFeatures: ["Blending boundary detection", "Temporal inconsistency", "Facial landmark alignment"]
      },
      {
        image: "https://images.pexels.com/photos/8059979/pexels-photo-8059979.jpeg",
        title: "Advanced Deepfake",
        description: "High-quality AI-generated face swap",
        confidence: 96.5,
        keyFeatures: ["Texture coherence analysis", "Facial animation patterns", "Eye reflection inconsistency"]
      }
    ]
  };

  type AttackType = keyof typeof resultExamples;

  const tabContent = {
    print: "Print attacks use photographs of authorized users. Our system detects these by analyzing micro-texture patterns, print artifacts, and light reflection characteristics that differ from real human skin.",
    replay: "Replay attacks use videos displayed on digital screens. The system identifies these through screen reflection patterns, display artifacts, and spectral analysis that can detect the light emission qualities unique to screens.",
    mask: "3D mask attacks use silicone or other materials to create realistic face coverings. Our detection focuses on material properties, microscopic texture differences, and subtle motion patterns that differ from real skin.",
    deepfake: "Deepfake attacks use AI-generated videos to impersonate authorized users. Detection relies on identifying blending artifacts, temporal inconsistencies, and subtle imperfections in the generated facial features."
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex overflow-x-auto space-x-2 mb-6">
        {(Object.keys(resultExamples) as AttackType[]).map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`px-4 py-2 rounded-md whitespace-nowrap text-sm font-medium transition-colors ${
              activeTab === type
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Attacks
          </button>
        ))}
      </div>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-800">
          {tabContent[activeTab as AttackType]}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resultExamples[activeTab as AttackType].map((example, index) => (
          <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="relative">
              <img 
                src={example.image} 
                alt={example.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <X className="h-4 w-4 mr-1" />
                Spoof Detected
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">{example.title}</h3>
                <p className="text-slate-200 text-sm">{example.description}</p>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-slate-600">Confidence Score</div>
                <div className="text-lg font-bold text-blue-600">{example.confidence}%</div>
              </div>
              
              <h4 className="font-medium text-slate-800 mb-2">Key Detection Features:</h4>
              <ul className="space-y-2">
                {example.keyFeatures.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                    </div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-4 w-full py-2 flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                View Detailed Analysis
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsGallery;
import React from 'react';

const DatasetExampleGrid: React.FC = () => {
  const imageExamples = [
    {
      category: "Real Faces",
      images: [
        { src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg", description: "Real face, controlled lighting" },
        { src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg", description: "Real face, natural lighting" },
        { src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg", description: "Real face, outdoor setting" },
      ]
    },
    {
      category: "Print Attacks",
      images: [
        { src: "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg", description: "Print attack, matte paper" },
        { src: "https://images.pexels.com/photos/4467158/pexels-photo-4467158.jpeg", description: "Print attack, glossy paper" },
        { src: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg", description: "Print attack, multiple images" },
      ]
    },
    {
      category: "Replay Attacks",
      images: [
        { src: "https://images.pexels.com/photos/7048043/pexels-photo-7048043.jpeg", description: "Replay attack, smartphone" },
        { src: "https://images.pexels.com/photos/4035587/pexels-photo-4035587.jpeg", description: "Replay attack, tablet" },
        { src: "https://images.pexels.com/photos/5053842/pexels-photo-5053842.jpeg", description: "Replay attack, laptop screen" },
      ]
    },
    {
      category: "3D Mask Attacks",
      images: [
        { src: "https://images.pexels.com/photos/5623835/pexels-photo-5623835.jpeg", description: "Silicone mask attack" },
        { src: "https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg", description: "Partial face mask" },
        { src: "https://images.pexels.com/photos/4226215/pexels-photo-4226215.jpeg", description: "Full face mask" },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {imageExamples.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.images.map((image, imageIndex) => (
              <div key={imageIndex} className="overflow-hidden rounded-lg border border-slate-200">
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img 
                    src={image.src} 
                    alt={image.description}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end">
                    <p className="text-white text-sm p-3">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <p className="text-blue-800 text-sm italic">
          Note: For privacy and ethical reasons, the actual dataset contains real faces with proper consent and synthetic spoofing examples. The images shown above are representative examples for illustration purposes only.
        </p>
      </div>
    </div>
  );
};

export default DatasetExampleGrid;
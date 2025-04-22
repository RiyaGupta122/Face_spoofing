import React from 'react';
import { Shield, Layers, Cpu, GitMerge, AlertTriangle } from 'lucide-react';
import ModelDiagram from '../components/ModelDiagram';

const ArchitecturePage: React.FC = () => {
  const architectureStages = [
    {
      title: "Face Detection & ROI Extraction",
      description: "First, we locate faces in the input image and extract the region of interest. We use the MTCNN (Multi-task Cascaded Convolutional Networks) algorithm to accurately detect facial regions across various poses and lighting conditions.",
      icon: <Shield className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Feature Extraction & Analysis",
      description: "Our system extracts both shallow and deep features from the face image. Shallow features include color textures and reflection patterns, while deep features are learned through convolutional neural networks to capture subtle spoofing patterns.",
      icon: <Layers className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Generative Adversarial Network",
      description: "The core of our system uses a dual-stream GAN architecture. The generator attempts to create realistic spoofing attacks, while the discriminator learns to distinguish between real faces and the generator's attempts, continuously improving detection ability.",
      icon: <GitMerge className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Multi-modal Fusion & Decision",
      description: "We combine multiple classifiers that analyze different aspects of the face (texture, depth estimation, reflection patterns) for a final decision. This ensemble approach increases robustness against various attack types.",
      icon: <Cpu className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Adversarial Training Process",
      description: "Our model undergoes rigorous adversarial training where it's continuously exposed to new spoofing techniques, including print attacks, replay attacks, 3D mask attacks, and deepfakes to enhance resilience.",
      icon: <AlertTriangle className="h-8 w-8 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">GAN Architecture & System Design</h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-200">
              Our anti-face spoofing system leverages a novel GAN-based architecture to detect increasingly sophisticated presentation attacks.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">System Architecture</h2>
          <ModelDiagram />
          <p className="text-slate-600 mt-6 max-w-4xl mx-auto">
            The diagram above illustrates our end-to-end anti-face spoofing system. Our approach combines traditional computer vision techniques with advanced deep learning models in a multi-stage pipeline.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Architectural Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architectureStages.map((stage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    {stage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{stage.title}</h3>
                </div>
                <p className="text-slate-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">GAN Model Architecture</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Generator Network</h3>
                <p className="text-slate-600 mb-4">
                  Our generator uses a U-Net architecture with skip connections to maintain spatial information. It consists of:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Encoder: 5 convolutional blocks with batch normalization</li>
                  <li>Latent space: 512-dimensional feature maps</li>
                  <li>Decoder: 5 transposed convolutional blocks with skip connections</li>
                  <li>Output: Tanh activation for normalized RGB image generation</li>
                </ul>
                <div className="mt-4 p-3 bg-slate-100 rounded-md">
                  <code className="text-sm text-slate-800">
                    Input (3×256×256) → Conv → BN → LeakyReLU → ... → Output (3×256×256)
                  </code>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Discriminator Network</h3>
                <p className="text-slate-600 mb-4">
                  Our discriminator employs a PatchGAN architecture to classify local image patches as real or fake:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Multiple convolutional layers with increasing filter depth</li>
                  <li>Spectral normalization for training stability</li>
                  <li>No fully connected layers to maintain spatial information</li>
                  <li>Auxiliary classifier for face/spoof classification</li>
                </ul>
                <div className="mt-4 p-3 bg-slate-100 rounded-md">
                  <code className="text-sm text-slate-800">
                    Input (3×256×256) → Conv → LeakyReLU → ... → Output (1×16×16 + class)
                  </code>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Loss Functions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-slate-200 rounded-md">
                  <h4 className="font-medium text-slate-900 mb-2">Adversarial Loss</h4>
                  <p className="text-slate-600">
                    We use WGAN-GP (Wasserstein GAN with gradient penalty) loss for improved training stability and convergence.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-md">
                  <h4 className="font-medium text-slate-900 mb-2">Feature Matching Loss</h4>
                  <p className="text-slate-600">
                    Penalizes differences in feature representations between real and generated images.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-md">
                  <h4 className="font-medium text-slate-900 mb-2">Pixel Reconstruction Loss</h4>
                  <p className="text-slate-600">
                    L1 loss between generated and target images to encourage structural preservation.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-md">
                  <h4 className="font-medium text-slate-900 mb-2">Classification Loss</h4>
                  <p className="text-slate-600">
                    Binary cross-entropy loss for the spoof/real classification task.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Details</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Framework & Libraries</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>PyTorch 1.10 for model implementation</li>
                  <li>OpenCV for image processing</li>
                  <li>MTCNN for face detection</li>
                  <li>Albumentations for data augmentation</li>
                  <li>MLflow for experiment tracking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Hardware Requirements</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Training: NVIDIA A100 GPU (40GB)</li>
                  <li>RAM: 64GB for large batch processing</li>
                  <li>Storage: 2TB SSD for dataset</li>
                  <li>Inference: Any CUDA-capable GPU</li>
                  <li>CPU-only inference possible but slower</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Optimization</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Adam optimizer with β₁=0.5, β₂=0.999</li>
                  <li>Learning rate: 0.0002 with decay</li>
                  <li>Batch size: 32 for training</li>
                  <li>Mixed precision training (FP16)</li>
                  <li>Gradient accumulation for larger batches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturePage;
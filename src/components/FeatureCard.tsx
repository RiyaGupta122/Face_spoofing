import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-50 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default FeatureCard;
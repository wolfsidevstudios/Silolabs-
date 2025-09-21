
import React from 'react';
import { Lab } from '../types';

interface LabCardProps {
  lab: Lab;
}

const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);


const LabCard: React.FC<LabCardProps> = ({ lab }) => {
  const CardContent = () => (
    <div className="relative p-6 flex flex-col h-full group">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-100">{lab.name}</h3>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${lab.badgeColorClasses}`}>
                {lab.badge}
            </span>
        </div>
        <p className="text-gray-400 flex-grow mb-6">{lab.description}</p>
        
        {lab.status === 'live' && lab.link && (
            <div className="mt-auto">
                <span className="text-blue-400 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                    Launch Lab
                    <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        )}

        {lab.status === 'coming_soon' && (
             <div className="mt-auto">
                <span className="text-gray-500 flex items-center gap-2">
                    Under Development
                </span>
            </div>
        )}
    </div>
  );
  
  const baseClasses = "bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden h-full transform transition-all duration-300";

  return lab.status === 'live' && lab.link ? (
    <a 
      href={lab.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${baseClasses} hover:scale-[1.03] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20`}
    >
      <CardContent />
    </a>
  ) : (
    <div className={`${baseClasses} cursor-not-allowed`}>
      <CardContent />
    </div>
  );
};

export default LabCard;

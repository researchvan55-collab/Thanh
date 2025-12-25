
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative group">
      {/* Timeline Connector */}
      <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-slate-200 group-last:bg-gradient-to-b group-last:from-slate-200 group-last:to-transparent"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-16">
        <div className="md:text-right pt-2 order-2 md:order-1">
          <div className="inline-flex px-3 py-1 bg-blue-50 text-blue-700 text-xs font-black tracking-widest rounded-full border border-blue-100 mb-2">
            {experience.period}
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
            {experience.institution}
          </h4>
        </div>
        
        <div className="relative md:col-span-3 order-1 md:order-2">
          {/* Node Marker */}
          <div className="absolute -left-1 md:-left-[52px] top-4 h-3 w-3 rounded-full bg-white border-2 border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.1)] group-hover:scale-150 transition-transform z-10"></div>
          
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all group-hover:border-blue-100/50">
            <h5 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-sm text-blue-500">
                <i className="fa-solid fa-briefcase"></i>
              </span>
              {experience.role}
            </h5>
            
            <ul className="grid grid-cols-1 gap-4">
              {experience.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item">
                  <div className="shrink-0 mt-1 h-5 w-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-[10px]">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;


import React from 'react';
import { Award } from '../types';

interface AwardsSectionProps {
  awards: Award[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {awards.map((award, idx) => (
        <div key={idx} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors">
          <div className="h-16 w-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 text-2xl shrink-0">
             <i className={`fa-solid ${award.title.includes('Table Tennis') || award.title.includes('Ping-Pong') ? 'fa-table-tennis-paddle-ball' : 'fa-award'}`}></i>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 leading-snug">{award.title}</h4>
            {award.institution && <p className="text-sm text-slate-500 mt-1">{award.institution}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardsSection;

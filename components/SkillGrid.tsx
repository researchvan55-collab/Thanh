
import React from 'react';
import { Skill } from '../types';

interface SkillGridProps {
  skills: Skill[];
}

const SkillGrid: React.FC<SkillGridProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, idx) => (
        <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all border-b-4 border-b-transparent hover:border-b-blue-600">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                skill.level === 'Advanced' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-blue-50 text-blue-700 border border-blue-100'
              }`}>
                {skill.level}
              </span>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">{skill.area}</h4>
            <p className="text-sm text-slate-500">{skill.note}</p>
          </div>
          
          <div className="mt-6 flex gap-1">
             {[...Array(5)].map((_, i) => (
               <div key={i} className={`h-1.5 w-full rounded-full ${
                 i < (skill.level === 'Advanced' ? 5 : 3) ? 'bg-blue-600' : 'bg-slate-100'
               }`} />
             ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillGrid;

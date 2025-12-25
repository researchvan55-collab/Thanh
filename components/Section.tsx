
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight shrink-0">
          {title}
        </h2>
        <div className="h-px bg-slate-200 w-full"></div>
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default Section;

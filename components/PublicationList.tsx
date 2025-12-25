
import React, { useState, useMemo } from 'react';
import { Publication } from '../types';

interface PublicationListProps {
  journals: Publication[];
  conferences: Publication[];
  presentations: Publication[];
}

const PublicationList: React.FC<PublicationListProps> = ({ journals, conferences, presentations }) => {
  const [activeTab, setActiveTab] = useState<'journals' | 'conferences' | 'presentations'>('journals');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'journals', label: 'Journal Articles', icon: 'fa-book-open' },
    { id: 'conferences', label: 'Conference Papers', icon: 'fa-scroll' },
    { id: 'presentations', label: 'Presentations', icon: 'fa-person-chalkboard' },
  ];

  const filteredData = useMemo(() => {
    const source = activeTab === 'journals' ? journals : activeTab === 'conferences' ? conferences : presentations;
    if (!searchQuery.trim()) return source;
    
    const query = searchQuery.toLowerCase();
    return source.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.authors.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query) ||
      item.year.toString().includes(query)
    );
  }, [activeTab, searchQuery, journals, conferences, presentations]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Modern Tabs */}
        <div className="flex flex-wrap p-1 bg-slate-100 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <i className={`fa-solid ${tab.icon} opacity-60`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative group max-w-xs w-full">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors"></i>
          <input 
            type="text" 
            placeholder="Search papers, years, keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 relative">
        {filteredData.length > 0 ? (
          filteredData.map((pub, idx) => (
            <div 
              key={`${activeTab}-${idx}`} 
              className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 overflow-hidden"
            >
              {/* Highlight bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-transparent group-hover:bg-blue-600 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex flex-col items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    <span className="text-xs font-black text-slate-400 group-hover:text-blue-400">YEAR</span>
                    <span className="text-lg font-bold text-slate-900 group-hover:text-blue-700">{pub.year}</span>
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                      {pub.title}
                    </h4>
                    {pub.url && (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="shrink-0 h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <i className="fa-solid fa-users text-blue-300"></i>
                      {pub.authors}
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50/50 px-3 py-1 rounded-lg italic">
                      <i className="fa-solid fa-building-columns text-blue-300"></i>
                      {pub.source}
                    </div>
                  </div>

                  {pub.award && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-xs font-black uppercase tracking-widest border border-amber-100 shadow-sm animate-pulse-slow">
                      <i className="fa-solid fa-trophy"></i>
                      {pub.award}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="text-slate-300 text-5xl mb-4">
              <i className="fa-solid fa-folder-open"></i>
            </div>
            <h5 className="text-lg font-bold text-slate-800">No results found</h5>
            <p className="text-slate-500">Try adjusting your search query or switching tabs.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationList;

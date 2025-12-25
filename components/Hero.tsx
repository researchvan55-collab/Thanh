
import React, { useState, useEffect } from 'react';
import { cvData } from '../data';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [interestIndex, setInterestIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    const currentInterest = cvData.researchInterests[interestIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentInterest) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setInterestIndex((prev) => (prev + 1) % cvData.researchInterests.length);
      } else {
        setDisplayText(currentInterest.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, interestIndex]);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#2563eb 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}></div>
      
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-40 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-10 text-center md:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] border border-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Instructional Technologist
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Exploring <br />
              <span className="text-blue-600 min-h-[1.2em] inline-block">
                {displayText}<span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
              Dr. Van Thanh Phan specializes in bridging the gap between human learning and cutting-edge AI technologies at the University of Economics Ho Chi Minh City.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <a href="#publications" className="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-blue-200 flex items-center gap-2">
              Explore Research
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <div className="flex items-center gap-4">
              <a href={cvData.socials.linkedIn} className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white hover:border-blue-200 transition-all shadow-sm">
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a href={cvData.socials.googleScholar} className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white hover:border-blue-200 transition-all shadow-sm">
                <i className="fa-solid fa-graduation-cap text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm md:max-w-md relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative aspect-[4/5] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://picsum.photos/seed/vanthanhphan/800/1000" 
              alt="Dr. Van Thanh Phan" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white font-bold text-2xl mb-1">{cvData.name}</h3>
              <p className="text-blue-300 text-sm font-medium tracking-wide">Texas Tech University Alumnus</p>
            </div>
          </div>
          {/* Decorative Floating Stats */}
          <div className="absolute -right-6 top-1/4 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow hidden lg:block">
            <div className="text-blue-600 font-bold text-lg">15+</div>
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Publications</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

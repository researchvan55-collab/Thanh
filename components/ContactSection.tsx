
import React from 'react';
import { CVData } from '../types';

interface ContactSectionProps {
  data: CVData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-12 lg:bg-slate-900 lg:text-white">
          <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
          <p className="text-slate-400 mb-10 leading-relaxed max-w-md">
            I'm always open to discussing research collaborations, instructional design projects, or speaking opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-xl">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Email</p>
                <a href={`mailto:${data.email}`} className="text-lg font-medium hover:text-blue-400 transition-colors">{data.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-xl">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Location</p>
                <p className="text-lg font-medium">{data.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-800 hidden lg:block">
            <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-6">Academic Network</p>
            <div className="flex gap-4">
               <a href={data.socials.linkedIn} className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                 <i className="fa-brands fa-linkedin-in"></i>
               </a>
               <a href={data.socials.googleScholar} className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                 <i className="fa-solid fa-graduation-cap"></i>
               </a>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Subject</label>
              <input type="text" placeholder="Collaboration, Research, Speaking, etc." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea placeholder="Tell me more about your inquiry..." rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

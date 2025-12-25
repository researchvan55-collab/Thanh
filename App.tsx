
import React, { useState, useEffect } from 'react';
import { cvData } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import PublicationList from './components/PublicationList';
import SkillGrid from './components/SkillGrid';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
import CVChat from './components/CVChat';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'research', 'publications', 'experience', 'skills', 'awards', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
          
          {/* Education & Research Interests */}
          <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-12 scroll-mt-24">
            <Section title="Education">
              <div className="space-y-6">
                {cvData.education.map((edu, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4 py-1">
                    <h3 className="font-bold text-lg text-slate-800">{edu.degree} in {edu.major}</h3>
                    <p className="text-blue-700 font-medium">{edu.institution}</p>
                    {edu.minor && <p className="text-slate-600 text-sm italic">Minor: {edu.minor}</p>}
                    <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Research Interests">
              <div className="flex flex-wrap gap-3">
                {cvData.researchInterests.map((interest, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white shadow-sm border border-slate-200 rounded-full text-slate-700 font-medium hover:border-blue-300 transition-colors">
                    {interest}
                  </span>
                ))}
              </div>
              <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-2">Current Projects</h4>
                <ul className="space-y-3">
                  {cvData.projects.map((proj, idx) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">{proj.title}</span>
                        <p className="text-xs text-slate-500 mt-0.5">{proj.fundingSource} ({proj.years})</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          </section>

          {/* Publications */}
          <section id="publications" className="scroll-mt-24">
            <Section title="Scholarly Works">
              <PublicationList 
                journals={cvData.publications.journals} 
                conferences={cvData.publications.conferences} 
                presentations={cvData.presentations}
              />
            </Section>
          </section>

          {/* Experience */}
          <section id="experience" className="scroll-mt-24">
            <Section title="Teaching & Professional Experience">
              <div className="space-y-12">
                {cvData.experience.map((exp, idx) => (
                  <ExperienceItem key={idx} experience={exp} />
                ))}
              </div>
            </Section>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-24">
            <Section title="Technical Proficiency">
              <SkillGrid skills={cvData.skills} />
            </Section>
          </section>

          {/* Awards */}
          <section id="awards" className="scroll-mt-24">
            <Section title="Honors & Recognition">
              <AwardsSection awards={cvData.awards} />
            </Section>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24 pb-24">
            <Section title="Get in Touch">
              <ContactSection data={cvData} />
            </Section>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center">
        <p className="mb-2">© {new Date().getFullYear()} Dr. Van Thanh Phan. All rights reserved.</p>
        <p className="text-sm">Designed for Academic Excellence | Instructional Technologist & AI Researcher</p>
      </footer>

      {/* Floating Chatbot */}
      <CVChat cvData={cvData} />
    </div>
  );
};

export default App;

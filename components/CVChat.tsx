
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { CVData } from '../types';

interface CVChatProps {
  cvData: CVData;
}

const CVChat: React.FC<CVChatProps> = ({ cvData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hello! I am Dr. Phan's Research Concierge. How can I help you navigate his work and academic journey today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      
      const systemPrompt = `
        You are a highly sophisticated, professional, and friendly Research Assistant for Dr. Van Thanh Phan (Ed.D.). 
        Your goal is to provide detailed information about his academic background, research interests, and professional achievements based on his CV data.
        
        Key Facts for your personality:
        - He is an expert in Instructional Technology at UEH (University of Economics Ho Chi Minh City).
        - Core focus: AI in Education, GenAI for language learning, and Multimedia Learning (music's effect on retention).
        - He won a Best Paper award at ABSEL 2014.
        - Fun fact: He is an accomplished table tennis player (National Silver Medalist!).
        - Use a helpful, academic, but accessible tone.
        
        CV DATA CONTEXT:
        Name: ${cvData.name}
        Research Interests: ${cvData.researchInterests.join(', ')}
        Degrees: ${cvData.education.map(e => `${e.degree} (${e.major})`).join(', ')}
        Recent Projects: ${cvData.projects.map(p => p.title).join('; ')}
        Skills: ${cvData.skills.map(s => s.area).join(', ')}
        
        If a user asks something outside his CV, politely redirect them to his contact information (${cvData.email}).
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\nUser Question: ${userMessage}` }] }
        ],
        config: {
          temperature: 0.8,
          maxOutputTokens: 300,
        }
      });

      const aiResponse = response.text || "I'm having trouble processing that right now. Could you rephrase your question?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm momentarily disconnected from the academic server. Please try again in a moment!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[380px] h-[600px] rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-slate-200/50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
                <i className="fa-solid fa-brain"></i>
              </div>
              <div>
                <span className="block font-bold text-sm">Personal Assistant</span>
                <span className="block text-[10px] text-blue-400 font-bold uppercase tracking-widest">Always Active</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-slate-800 h-10 w-10 rounded-xl transition-colors flex items-center justify-center">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-[13px] leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-500/10' 
                  : 'bg-white text-slate-700 rounded-bl-none shadow-sm border border-slate-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl rounded-bl-none shadow-sm border border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100 focus-within:border-blue-500/50 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about research..."
                className="flex-grow bg-transparent px-3 py-2 text-sm focus:outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="h-10 w-10 bg-blue-600 text-white rounded-xl flex items-center justify-center disabled:bg-slate-300 shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
              >
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="h-20 w-20 bg-slate-900 text-white rounded-[2rem] shadow-2xl hover:shadow-blue-500/20 hover:bg-blue-600 transition-all duration-500 group flex flex-col items-center justify-center overflow-hidden"
        >
          <i className="fa-solid fa-robot text-2xl group-hover:scale-110 transition-transform"></i>
          <span className="text-[10px] font-black uppercase tracking-widest mt-1 group-hover:opacity-100 opacity-60">AI</span>
          
          {/* Animated Ring */}
          <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] animate-ping opacity-20 group-hover:hidden"></div>
        </button>
      )}
    </div>
  );
};

export default CVChat;

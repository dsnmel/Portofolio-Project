import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-8 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-2xl w-full relative z-10 text-center">
        {/* --- HEADER (Thank you) --- */}
        <h1 className="text-6xl md:text-8xl font-black text-slate-800 tracking-tighter mb-12">
          Contact Me
        </h1>

        {/* --- SOSIAL MEDIA & EMAIL --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-base md:text-lg font-bold text-slate-600">
          
          {/* Email */}
          <a 
            href="mailto:desiiainull@gmail.com" 
            className="flex items-center gap-2 hover:text-indigo-600 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-indigo-600 transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>desiiainull@gmail.com</span>
          </a>

          <span className="hidden sm:inline text-slate-300">•</span>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/desiainulamelia" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-blue-600 transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span>desainmelia</span>
          </a>

          <span className="hidden sm:inline text-slate-300">•</span>

          {/* Instagram */}
          <a 
            href="https://instagram.com/dsnmel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-rose-600 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-rose-600 transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>dsnmel</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
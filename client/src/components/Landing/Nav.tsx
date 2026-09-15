import React from 'react';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#FDFBF7] border-b border-[#EAE6DF]">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#45312C]">
            <circle cx="9" cy="12" r="6" fill="currentColor" />
            <circle cx="15" cy="12" r="6" fill="currentColor" fillOpacity="0.7" />
          </svg>
        </div>
        <span className="text-xl font-medium tracking-tight text-[#45312C]">Clarion</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#45312C]">
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-70">
          By Specialty
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <a href="#" className="hover:opacity-70">Company</a>
        <a href="#" className="hover:opacity-70">Careers</a>
        <button className="bg-[#45312C] text-[#FDFBF7] px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#32231f] transition-colors">
          <span>→</span> Talk to us
        </button>
      </div>
    </nav>
  );
};

export default Nav;

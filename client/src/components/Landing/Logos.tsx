import React from 'react';

const Logos = () => {
  return (
    <section className="bg-[#FDFBF7] py-10 px-8 border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-medium text-[#45312C] opacity-70 mb-8">
          Trusted by leading healthcare providers
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-80 grayscale">
          {/* Oscar */}
          <div className="text-2xl font-bold tracking-tighter">oscar</div>
          
          {/* Medix Infusion */}
          <div className="flex flex-col text-sm font-bold leading-none tracking-tight">
            <span>medix</span>
            <span>infusion</span>
          </div>
          
          {/* scan.com */}
          <div className="flex items-center gap-1 font-bold text-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            scan.com
          </div>
          
          {/* current clinic */}
          <div className="flex items-center gap-1 font-semibold text-lg tracking-tight">
            <span className="text-xl">ʌ</span>current clinic
          </div>
          
          {/* GHD */}
          <div className="text-2xl font-black tracking-widest">GHD</div>
          
          {/* Herself Health */}
          <div className="flex items-center gap-2 font-semibold text-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Herself Health
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;

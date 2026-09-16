import React from "react";

const Logos = () => {
  return (
    <section className="bg-[#EBEBEB] border-b border-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 border-x border-gray-300">
        <p className="text-center text-[11px] md:text-xs font-semibold text-gray-500 mb-10">
          Trusted by leading healthcare providers
        </p>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-3xl font-bold tracking-tighter text-gray-800">
            oscar
          </div>
          <div className="flex flex-col text-sm font-bold leading-none tracking-tight text-gray-800">
            <span>medix</span>
            <span>infusion</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-xl text-gray-800">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            scan.com
          </div>
          <div className="flex items-center gap-1 font-semibold text-xl tracking-tight text-gray-800">
            <span className="text-2xl">ʌ</span>current clinic
          </div>
          <div className="text-3xl font-black tracking-widest text-gray-800">
            GHD
          </div>
          <div className="flex items-center gap-2 font-semibold text-xl text-gray-800">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
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

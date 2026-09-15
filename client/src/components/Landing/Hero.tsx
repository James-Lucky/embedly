import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#FDFBF7] border-b border-[#EAE6DF] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Left side text */}
        <div className="flex-1 py-20 px-8 md:px-12 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#45312C] leading-tight mb-6">
            Cut phone time.<br />Boost care time.
          </h1>
          <p className="text-lg md:text-xl text-[#45312C] opacity-80 mb-10 max-w-md leading-relaxed">
            Our human-like AI agents handle every call, answer each text, and manage workflows from end-to-end.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-[#45312C] text-[#FDFBF7] px-6 py-3 rounded-full font-medium hover:bg-[#32231f] transition-colors">
              Schedule a demo
            </button>
            <button className="bg-white border border-[#EAE6DF] text-[#45312C] px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-5 h-5 text-[#45312C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Try it out
            </button>
          </div>
        </div>

        {/* Right side visual */}
        <div className="flex-1 min-h-[400px] md:min-h-full bg-gradient-to-br from-[#77D4B6] via-[#3591A6] to-[#0A477A] relative flex items-center justify-center p-8">
          {/* Audio Wave Visual */}
          <div className="flex items-center justify-center gap-1 opacity-70">
            {[...Array(40)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 bg-white rounded-full"
                style={{ 
                  height: `${Math.max(10, Math.random() * 80)}px`,
                  opacity: Math.random() * 0.5 + 0.3
                }}
              ></div>
            ))}
          </div>

          {/* Try it out floating pill */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <span className="font-medium text-gray-800 text-lg">Try it out</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
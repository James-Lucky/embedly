import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row border-x border-gray-300 min-h-[600px]">
        
        {/* Text Content */}
        <div className="flex-1 p-12 md:p-24 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col justify-center">
          <h1 className="text-4xl md:text-4xl lg:text-[4rem] font-medium text-black leading-[1.1] mb-6 tracking-tight">
            Cut phone time.<br />
            Boost care time.
          </h1>
          
          <p className="text-sm md:text-base font-mono text-gray-500 mb-12 leading-relaxed max-w-md">
            Our human-like AI agents handle every call, answer each text, and manage workflows from end-to-end.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-black text-white px-8 py-3.5 rounded-sm text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm">
              Schedule a demo
            </button>
            <button className="bg-white text-black border border-gray-300 px-8 py-3.5 rounded-sm text-sm font-semibold hover:border-black transition-colors flex items-center gap-2 shadow-sm group">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              Try it out
            </button>
          </div>
        </div>

        {/* Visual Section */}
        <div className="flex-1 relative bg-gradient-to-br from-[#062432] via-[#0D87A8] to-[#0a4a60] flex items-center justify-center overflow-hidden min-h-[400px]">
          {/* Noise overlay */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          ></div>

          {/* Sound Wave Graphic */}
          <div className="relative z-10 flex items-center gap-1.5 px-12">
            {[...Array(30)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 bg-white rounded-full opacity-80"
                style={{
                  height: `${Math.max(10, Math.sin(i * 0.4) * 40 + Math.random() * 30)}px`
                }}
              ></div>
            ))}
            
            {/* Center Pill */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-2.5 rounded-lg shadow-lg flex items-center gap-2 border border-gray-100">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              <span className="text-sm font-semibold text-black">Try it out</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Stats = () => {
  return (
    <section className="bg-[#FDFBF7] pt-24 pb-32 px-8 relative overflow-hidden">
      {/* Background Bottom Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#77D4B6]/40 via-[#3591A6]/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-[#45312C] text-center mb-16">
          Empowering providers to deliver exceptional care
        </h2>

        <div className="border border-[#EAE6DF] bg-white bg-opacity-60 backdrop-blur-sm">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#EAE6DF]">
            <div className="p-8 md:p-10 border-r border-b md:border-b-0 border-[#EAE6DF]">
              <div className="text-4xl md:text-5xl text-[#45312C] mb-2 tracking-tight">71%</div>
              <div className="text-[#45312C] opacity-70 text-xs md:text-sm">Reduction in no-shows</div>
            </div>
            <div className="p-8 md:p-10 border-r border-b md:border-b-0 border-[#EAE6DF]">
              <div className="text-4xl md:text-5xl text-[#45312C] mb-2 tracking-tight">40%</div>
              <div className="text-[#45312C] opacity-70 text-xs md:text-sm">Increase in referral conversion</div>
            </div>
            <div className="p-8 md:p-10 border-r border-[#EAE6DF]">
              <div className="text-4xl md:text-5xl text-[#45312C] mb-2 tracking-tight">99%</div>
              <div className="text-[#45312C] opacity-70 text-xs md:text-sm">Decrease in hold time</div>
            </div>
            <div className="p-8 md:p-10">
              <div className="text-4xl md:text-5xl text-[#45312C] mb-2 tracking-tight">60%</div>
              <div className="text-[#45312C] opacity-70 text-xs md:text-sm">Calls resolved end-to-end</div>
            </div>
          </div>

          {/* Testimonial Row */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Logo area */}
            <div className="p-8 md:p-10 md:w-1/4 border-b md:border-b-0 md:border-r border-[#EAE6DF] flex flex-col justify-center">
              <div className="text-4xl font-black tracking-widest text-[#45312C] mb-2">GHD</div>
              <div className="text-[#45312C] opacity-70 text-sm">Practice Manager</div>
            </div>
            
            {/* Quote area */}
            <div className="p-8 md:p-12 md:w-3/4 flex flex-col justify-between">
              <p className="text-lg md:text-xl text-[#45312C] leading-relaxed mb-12">
                "Our biggest challenge was matching high call volume with enough staff to answer every call. Since working with Clarion, we've seen a tremendous improvement in both. Fewer calls reach our team, and there's better patient satisfaction across the board."
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <button className="text-[#45312C] opacity-50 hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  </button>
                  <button className="text-[#45312C] opacity-50 hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
                
                <div className="flex gap-2">
                  <div className="w-6 h-1.5 rounded-full bg-[#45312C]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45312C] opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

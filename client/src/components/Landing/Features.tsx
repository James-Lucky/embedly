import React from 'react';

const Features = () => {
  return (
    <section className="bg-[#FDFBF7] py-24 px-8 border-b border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#45312C] mb-4">
            Scale your practice
          </h2>
          <p className="text-lg text-[#45312C] opacity-80">
            Simplify everyday tasks so your team can focus on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#EAE6DF] bg-white bg-opacity-50">
          {/* Capture Feature */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#EAE6DF] flex flex-col group">
            <div className="h-48 bg-[#F6F5F2] rounded-xl mb-8 flex items-center justify-center relative overflow-hidden group-hover:bg-[#f0efea] transition-colors">
              {/* Abstract Visual for Capture */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Connecting lines */}
                <div className="absolute w-3/4 h-[2px] border-t-2 border-dashed border-[#D2CDC6] top-1/2 -translate-y-1/2"></div>
                
                <div className="z-10 bg-[#43A0C8] w-8 h-8 rounded-full flex items-center justify-center text-white text-xs -ml-16 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                
                {/* Central AI Node */}
                <div className="z-10 bg-white w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mx-4">
                   <div className="w-8 h-8 text-[#45312C]">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="9" cy="12" r="5" />
                        <circle cx="15" cy="12" r="5" fillOpacity="0.7" />
                      </svg>
                   </div>
                </div>
                
                <div className="z-10 bg-[#3BA781] w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#45312C] mb-3">Capture</h3>
            <p className="text-[#45312C] opacity-70 leading-relaxed text-sm">
              Answer every call, text, and message 24/7. No patients lost to hold music or after-hours gaps.
            </p>
          </div>

          {/* Convert Feature */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#EAE6DF] flex flex-col group">
            <div className="h-48 bg-[#F6F5F2] rounded-xl mb-8 flex items-center justify-center relative overflow-hidden group-hover:bg-[#f0efea] transition-colors">
              {/* Abstract Visual for Convert */}
              <div className="flex gap-4 items-center px-4 w-full justify-center">
                 {/* Document */}
                 <div className="w-16 h-24 bg-white rounded shadow-sm border border-gray-100 flex flex-col p-2 gap-1.5 opacity-80">
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                    <div className="w-full h-1 bg-gray-200 rounded mt-2"></div>
                    <div className="w-5/6 h-1 bg-gray-200 rounded"></div>
                 </div>
                 
                 <div className="w-8 h-[2px] border-t-2 border-dashed border-[#D2CDC6]"></div>
                 
                 {/* Message UI */}
                 <div className="bg-white rounded-lg shadow-md p-3 w-32 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-5 h-5 rounded-full bg-blue-100"></div>
                       <div className="flex flex-col">
                         <div className="w-10 h-1 bg-gray-300 rounded mb-1"></div>
                         <div className="w-6 h-1 bg-gray-200 rounded"></div>
                       </div>
                    </div>
                    <div className="bg-gray-50 rounded p-1.5">
                       <div className="w-full h-1 bg-gray-300 rounded mb-1"></div>
                       <div className="w-2/3 h-1 bg-gray-300 rounded"></div>
                    </div>
                 </div>
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#45312C] mb-3">Convert</h3>
            <p className="text-[#45312C] opacity-70 leading-relaxed text-sm">
              Turn referrals into booked appointments in hours, not weeks, and double your conversion rate.
            </p>
          </div>

          {/* Recover Feature */}
          <div className="p-8 flex flex-col group">
            <div className="h-48 bg-[#F6F5F2] rounded-xl mb-8 flex items-center justify-center relative overflow-hidden group-hover:bg-[#f0efea] transition-colors">
              {/* Abstract Visual for Recover */}
              <div className="flex items-center w-full justify-center">
                 {/* Calendar Grid */}
                 <div className="grid grid-cols-3 gap-1 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`w-6 h-6 rounded-sm ${i === 4 ? 'bg-red-100 flex items-center justify-center relative' : 'bg-[#EAF5F2]'}`}>
                         {i === 4 && <div className="absolute inset-0 flex items-center justify-center text-red-400 text-[10px]">✕</div>}
                      </div>
                    ))}
                 </div>
                 
                 <div className="w-6 h-[2px] border-t-2 border-dashed border-[#D2CDC6] mx-2"></div>
                 
                 {/* Success state */}
                 <div className="flex gap-2 items-center bg-white rounded-full pl-1 pr-3 py-1 shadow-md border border-gray-50">
                    <div className="w-6 h-6 rounded-full bg-blue-100"></div>
                    <div className="flex flex-col gap-1">
                      <div className="w-12 h-1.5 bg-gray-300 rounded"></div>
                    </div>
                 </div>
                 
                 <div className="w-4 h-[2px] border-t-2 border-dashed border-[#D2CDC6] mx-2"></div>
                 
                 <div className="w-6 h-6 rounded-full bg-[#3BA781] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                   +$
                 </div>
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#45312C] mb-3">Recover</h3>
            <p className="text-[#45312C] opacity-70 leading-relaxed text-sm">
              Cut no-shows in half and automatically backfill cancelled slots to keep your schedule full.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

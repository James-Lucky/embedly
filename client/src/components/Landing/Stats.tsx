import React from "react";

const Stats = () => {
  return (
    <section className="bg-white pt-24 pb-32 px-8 relative overflow-hidden">
      {/* Background Bottom Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#37C6E5]/20 via-[#37C6E5]/5 to-transparent blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 border border-gray-300 bg-transparent">
        <div className="py-20 border-b border-gray-300">
          <h2 className="text-3xl md:text-5xl font-medium text-black text-center tracking-tight">
            Empowering providers to deliver exceptional care
          </h2>
        </div>

        <div>
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-300">
            <div className="p-8 md:p-10 border-r border-b md:border-b-0 border-gray-300">
              <div className="text-4xl md:text-5xl text-black font-medium mb-3 tracking-tight">
                71%
              </div>
              <div className="text-gray-500 font-mono text-xs uppercase tracking-wider">
                Reduction in no-shows
              </div>
            </div>
            <div className="p-8 md:p-10 border-r md:border-b-0 border-b border-gray-300">
              <div className="text-4xl md:text-5xl text-black font-medium mb-3 tracking-tight">
                40%
              </div>
              <div className="text-gray-500 font-mono text-xs uppercase tracking-wider">
                Increase in referral conversion
              </div>
            </div>
            <div className="p-8 md:p-10 border-r border-gray-300">
              <div className="text-4xl md:text-5xl text-[#37C6E5] font-medium mb-3 tracking-tight">
                99%
              </div>
              <div className="text-gray-500 font-mono text-xs uppercase tracking-wider">
                Decrease in hold time
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="text-4xl md:text-5xl text-black font-medium mb-3 tracking-tight">
                60%
              </div>
              <div className="text-gray-500 font-mono text-xs uppercase tracking-wider">
                Calls resolved end-to-end
              </div>
            </div>
          </div>

          {/* Testimonial Row */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Logo area */}
            <div className="p-8 md:p-10 md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col justify-center">
              <div className="text-3xl font-black tracking-widest text-black mb-3">
                GHD
              </div>
              <div className="text-gray-500 font-mono uppercase tracking-wider text-xs">
                Practice Manager
              </div>
            </div>

            {/* Quote area */}
            <div className="p-8 md:p-12 md:w-3/4 flex flex-col justify-between">
              <p className="text-lg md:text-xl text-black leading-relaxed mb-10 font-medium">
                "Our biggest challenge was matching high call volume with enough
                staff to answer every call. Since working with Clarion, we've
                seen a tremendous improvement in both. Fewer calls reach our
                team, and there's better patient satisfaction across the board."
              </p>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-4">
                  <button className="text-gray-400 hover:text-black transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-black transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-2">
                  <div className="w-6 h-1 rounded-full bg-black"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
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

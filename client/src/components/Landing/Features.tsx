import React from "react";

const Features = () => {
  return (
    <section className="bg-white py-24 px-8 border-b border-gray-300">
      <div className="max-w-6xl mx-auto border border-gray-300 bg-transparent">
        <div className="text-center py-20 border-b border-gray-300">
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-6 tracking-tight">
            Scale your practice
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-mono text-sm">
            Simplify everyday tasks so your team can focus on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Capture Feature */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col group">
            <div className="h-48 mb-6 flex items-center justify-center relative w-full">
              {/* Graphic elements */}
              <div className="flex items-center w-full justify-center gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#37C6E5] flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="w-8 h-[1px] border-t-2 border-dashed border-gray-300"></div>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center shrink-0">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
                    C
                  </div>
                </div>
                <div className="w-8 h-[1px] border-t-2 border-dashed border-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-[#27C93F] flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Chat Bubble below */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-md border border-gray-200 p-2.5 flex items-center gap-3 w-48 z-20">
                <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0 flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">
                    Dr. Marcus Breyer
                  </span>
                  <span className="text-[9px] text-gray-500 font-mono tracking-tighter">
                    Mon 24, 9:40 AM
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium text-black mb-3">Capture</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Answer every call, text, and message 24/7. No patients lost to
                hold music or after-hours gaps.
              </p>
            </div>
          </div>

          {/* Convert Feature */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col group">
            <div className="h-48 mb-6 flex items-center justify-center relative w-full">
              <div className="flex items-center w-full justify-center relative z-10">
                {/* Document UI */}
                <div className="w-32 h-36 bg-white border border-gray-200 rounded-md shadow-sm p-4 flex flex-col gap-3 relative mr-8 opacity-60">
                  <div className="w-full h-2 bg-gray-200 rounded-sm"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded-sm"></div>
                  <div className="w-full h-2 bg-gray-200 rounded-sm mt-3"></div>
                  <div className="w-5/6 h-2 bg-gray-200 rounded-sm"></div>
                  <div className="w-1/2 h-2 bg-gray-200 rounded-sm"></div>
                </div>

                {/* Cyan Vertical Line (Slider) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#37C6E5] flex items-center justify-center z-20 h-full">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#37C6E5] shadow-sm flex items-center justify-center text-[#37C6E5]">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                      <path
                        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                        transform="translate(6,0)"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute right-4 z-20 flex flex-col items-center">
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-2.5 flex items-center gap-3 w-48 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0 relative overflow-hidden flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-xs font-bold text-black">
                        Dr. Mina Solano
                      </span>
                      <span className="text-[9px] text-gray-500 font-mono tracking-tighter">
                        Tue 12, 11:00 AM
                      </span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#27C93F] shrink-0"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium text-black mb-3">Convert</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Turn referrals into booked appointments in hours, not weeks, and
                double your conversion rate.
              </p>
            </div>
          </div>

          {/* Recover Feature */}
          <div className="p-10 flex flex-col group">
            <div className="h-48 mb-6 flex items-center justify-center relative w-full">
              <div className="flex items-center w-full justify-center relative z-10">
                {/* Calendar UI */}
                <div className="grid grid-cols-4 gap-1 p-2 bg-white rounded-md shadow-sm border border-gray-200 w-28">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 rounded-sm ${i === 6 ? "bg-[#FF5F56]/10 flex items-center justify-center border border-[#FF5F56]/30" : "bg-gray-100"}`}
                    >
                      {i === 6 && (
                        <span className="text-[#FF5F56] text-[10px] font-bold">
                          ×
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="w-6 h-[1px] border-t-2 border-dashed border-gray-300 mx-1"></div>

                {/* Chat UI */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-2 flex items-center gap-2 w-32 shrink-0">
                  <div className="w-6 h-6 rounded-full bg-gray-200 shrink-0 flex items-center justify-center overflow-hidden">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Dr. Sophia Keten
                    </span>
                    <span className="text-[8px] text-gray-500 font-mono tracking-tighter">
                      Fri 21, 8:00 AM
                    </span>
                  </div>
                </div>

                <div className="w-6 h-[1px] border-t-2 border-dashed border-gray-300 mx-1"></div>

                <div className="bg-[#27C93F]/10 text-[#27C93F] px-2 py-1 rounded-full text-[10px] font-bold border border-[#27C93F]/30 shrink-0">
                  +$
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium text-black mb-3">Recover</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Cut no-shows in half and automatically backfill cancelled slots
                to keep your schedule full.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

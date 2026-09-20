"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="min-h-screen bg-white font-sans flex flex-col justify-center">
        <div className="w-full border-y border-gray-300 flex-1 flex flex-col bg-white mt-16 mb-16">
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row border-x border-gray-300 relative">
            {/* Mobile Logo */}
            <div className="absolute top-6 left-6 lg:hidden flex items-center gap-2 z-20">
              <img src="/logo.webp" alt="logo" className="w-7 h-7" />
              <span className="text-lg font-bold tracking-tight text-black bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
                Embedly
              </span>
            </div>

            {/* Left Side - Brand/Graphic Panel */}
            <div className="hidden lg:flex w-1/2 border-b lg:border-b-0 lg:border-r border-gray-300 relative">
              <div className="flex-1 relative overflow-hidden bg-[#F9F9F9] flex flex-col items-center justify-center">
                {/* Background Illustration */}
                <img
                  src="/404-illustration.webp"
                  alt="404 Illustration"
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Top left Logo inside panel */}
                <div className="absolute top-6 left-6 flex items-center gap-1 z-20">
                  <img src="/logo.webp" alt="logo" className="w-8 h-8" />
                  <span className="text-lg font-bold tracking-tight text-black px-2 py-1 rounded backdrop-blur-sm">
                    Embedly
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Mobile Illustration (Visible only on mobile) */}
              <div className="lg:hidden w-full h-64 relative overflow-hidden bg-[#F9F9F9] border-b border-gray-300">
                <img
                  src="/404-illustration.webp"
                  alt="404 Illustration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-8 lg:p-16 xl:p-24 max-w-[500px] w-full mx-auto text-center lg:text-left">
                <h1 className="text-6xl md:text-[5rem] font-medium text-black leading-[1.1] mb-6 tracking-tight">
                  404
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-4">
                  Page not found
                </h2>
                <p className="text-sm font-mono text-gray-500 mb-10 leading-relaxed">
                  The page you are looking for doesn't exist or has been moved.
                  Let's get you back on track.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/"
                    className="bg-black text-white px-8 py-3.5 rounded-sm text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    Go Home
                  </Link>
                  <button
                    onClick={() => window.history.back()}
                    className="bg-white text-black border border-gray-300 px-8 py-3.5 rounded-sm text-sm font-semibold hover:border-black transition-colors shadow-sm"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-white font-sans flex flex-col justify-center">
      <div className="w-full border-y border-gray-300 flex-1 flex flex-col bg-white mt-16 mb-16">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row border-x border-gray-300 relative">
          {/* Top Right "Log in" (Positioned relative to the card) */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 text-sm font-semibold text-gray-500 flex items-center gap-1 z-20">
            <p className="hidden md:block">Already have an account?&nbsp;</p>
            <Link
              href="/auth/login"
              className="text-black hover:underline transition-all"
            >
              Log in
            </Link>
          </div>

          {/* Mobile Logo (Visible only on mobile) */}
          <div className="absolute top-6 left-6 lg:hidden flex items-center gap-2 z-20">
            <img
              src="/logo.webp"
              alt="logo"
              className="w-7 h-7 select-none pointer-events-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <span className="text-lg font-bold tracking-tight text-black bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
              Embedly
            </span>
          </div>

          {/* Left Side - Brand/Graphic Panel (Hidden on mobile) */}
          <div className="hidden lg:flex w-1/2 border-b lg:border-b-0 lg:border-r border-gray-300 relative">
            <div className="flex-1 relative overflow-hidden bg-[#F5F3F1] flex flex-col items-center justify-center">
              {/* Background Illustration */}
              <img
                src="/auth-illustration.webp"
                alt="AI Assistant Illustration"
                className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Top left Logo inside panel */}
              <div className="absolute top-6 left-6 flex items-center gap-2 z-20">
                <Link className="flex" href="/">
                  <img
                    src="/logo.webp"
                    alt="logo"
                    className="w-7 h-7 mr-2 select-none pointer-events-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <span className="text-lg font-bold tracking-tight text-black bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
                    Embedly
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-12">
            <div className="max-w-[340px] w-full mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-2">
                Sign up
              </h1>
              <p className="text-sm font-semibold text-gray-500 mb-8">
                Create your Embedly account
              </p>

              {/* Social Logins */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-sm py-2.5 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-gray-800">
                    Google
                  </span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-sm py-2.5 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  <svg
                    className="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.48-.79 1.48.05 2.68.65 3.46 1.76-2.9 1.68-2.4 5.76.54 6.94-1.14 2.87-1.9 4.31-2.56 5.26zm-3.02-13.8c-.1-1.93 1.57-3.78 3.53-3.98.37 2.15-1.63 3.97-3.53 3.98z" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-800">
                    Apple ID
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="text-[11px] font-mono font-medium text-black">
                  Or sign up with email
                </span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-[#F5F5F7] border border-transparent focus:border-gray-300 focus:bg-white text-black text-sm rounded-sm pl-10 pr-4 py-3.5 transition-all outline-none font-semibold placeholder:text-gray-500 placeholder:font-medium"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-[#F5F5F7] border border-transparent focus:border-gray-300 focus:bg-white text-black text-sm rounded-sm pl-10 pr-4 py-3.5 transition-all outline-none font-semibold placeholder:text-gray-500 placeholder:font-medium"
                    required
                  />
                </div>

                <div className="relative mb-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full bg-[#F5F5F7] border border-transparent focus:border-gray-300 focus:bg-white text-black text-sm rounded-sm pl-10 pr-10 py-3.5 transition-all outline-none font-semibold placeholder:text-gray-500 placeholder:font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-sm py-3.5 font-semibold text-sm hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-2 mt-1"
                >
                  Create account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

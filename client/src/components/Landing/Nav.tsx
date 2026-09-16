"use client";

import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 py-5 bg-[#EBEBEB] border-b border-gray-300 relative z-50">
        <div className="flex items-center gap-2 text-black cursor-pointer">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold tracking-tight">Embedly</h1>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <a href="#" className="hover:text-black transition-colors">
            Platform
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Solutions
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Docs
          </a>
          <div className="flex items-center gap-4 ml-4 border-l border-gray-300 pl-8">
            <a href="#" className="hover:text-black transition-colors">
              Log in
            </a>
            <button className="bg-black text-white px-5 py-2.5 rounded-sm hover:bg-gray-800 transition-colors shadow-sm">
              Start Building
            </button>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black p-2 focus:outline-none hover:bg-gray-200 rounded-sm transition-colors"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[73px] left-0 right-0 bg-[#EBEBEB] border-b border-gray-300 z-40 px-6 py-6 shadow-xl flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
            <a href="#" className="hover:text-black transition-colors">
              Platform
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Solutions
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Docs
            </a>
          </div>
          <div className="flex flex-col gap-4 pt-6 border-t border-gray-300">
            <a
              href="#"
              className="hover:text-black font-semibold text-sm transition-colors text-center"
            >
              Log in
            </a>
            <button className="bg-black text-white px-5 py-3 rounded-sm hover:bg-gray-800 transition-colors shadow-sm font-semibold w-full">
              Start Building
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

"use client";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-300">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5 relative">
        <div className="flex items-center gap-2 text-black cursor-pointer">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold tracking-tight">Embedly</h1>
        </div>

        <div className="hidden xl:flex items-center gap-8 text-sm font-semibold text-gray-700">
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
            <a href="/auth/login" className="bg-white text-black border border-gray-300 hover:border-black px-5 py-2.5 rounded-sm transition-colors shadow-sm font-semibold flex items-center justify-center">
              Log in
            </a>
            <a href="/auth/signUp" className="bg-black text-white px-5 py-2.5 rounded-sm hover:bg-gray-800 transition-colors shadow-sm font-semibold flex items-center justify-center">
              Start Building
            </a>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black p-2 focus:outline-none hover:bg-gray-100 rounded-sm transition-colors"
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
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-300 px-6 py-6 shadow-xl flex flex-col gap-6 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition-colors"
            >
              Platform
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition-colors"
            >
              Docs
            </a>
          </div>
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-300">
            <a
              href="/auth/login"
              onClick={() => setIsOpen(false)}
              className="bg-white text-black border border-gray-300 hover:border-black px-5 py-3 rounded-sm transition-colors shadow-sm font-semibold text-sm text-center block w-full"
            >
              Log in
            </a>
            <a
              href="/auth/signUp"
              onClick={() => setIsOpen(false)}
              className="bg-black text-white px-5 py-3 rounded-sm hover:bg-gray-800 transition-colors shadow-sm font-semibold text-sm w-full text-center block"
            >
              Start Building
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

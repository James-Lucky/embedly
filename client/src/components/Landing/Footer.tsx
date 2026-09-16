import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#EBEBEB] py-16 px-8 border-t border-gray-300 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6">
              <div className="w-5 h-5 bg-black rounded-sm relative">
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#37C6E5] rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-black">ChatDock</span>
          </div>
          <p className="text-sm text-gray-500 font-mono leading-relaxed mt-2">
            A developer-first, embeddable AI agent platform that helps businesses add intelligent AI assistants to their websites.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-black mb-2 text-sm">Product</h4>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Platform</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Solutions</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Pricing</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Changelog</a>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-black mb-2 text-sm">Resources</h4>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Documentation</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">API Reference</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Blog</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Community</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-black mb-2 text-sm">Company</h4>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">About</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Careers</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Legal</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400 font-mono">
          &copy; {new Date().getFullYear()} ChatDock Inc. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

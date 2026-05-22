import React from 'react';
import { Search, Menu, Plus, Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-[480px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Find influencers to collaborate with"
              className="w-full border border-neutral-200 rounded-md pl-4 pr-10 py-2 text-sm text-neutral-700 placeholder-neutral-400 bg-white outline-none focus:border-primary-500 transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-150">
            <Zap className="w-3.5 h-3.5 fill-white" />
            Upgrade
          </button>

          <button className="flex items-center gap-1.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-150">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Create Campaign</span>
          </button>

          {/* Avatar + Hamburger pill */}
          <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-1.5 py-1.5">
            {/* Avatar circle */}
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="currentColor">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
            {/* Hamburger */}
            <button className="text-neutral-500 hover:text-neutral-700 pr-1">
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
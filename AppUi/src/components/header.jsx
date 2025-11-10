import React from 'react';
import { Menu } from 'lucide-react';

export default function Header({ onToggleSidebar, componentName }) {
  return (
    <nav className="w-full h-full flex items-center justify-between px-8 bg-gray-900">
      {/* Logo - Left */}
      <div className="flex items-center">
        <div className="text-white font-black tracking-tighter" style={{ fontSize: '3rem', fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.08em', lineHeight: '1' }}>
          APP.UI
        </div>
        <span className="text-white/40 text-xs ml-2 mt-4">©2025</span>
      </div>

      {/* Component Name - Middle */}
      <div className="flex-1 max-w-md mx-8 text-center">
        <h2 className="text-xl font-semibold text-white tracking-tight">
          {componentName || 'Select a Component'}
        </h2>
      </div>

      {/* Right side - Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="text-white/90 text-sm font-medium hover:text-white transition-colors">
          About us
        </a>
        <a href="#" className="text-white/90 text-sm font-medium hover:text-white transition-colors">
          Browse Components
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white hover:text-gray-300 transition-colors"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>
    </nav>
  );
}

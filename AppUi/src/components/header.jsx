import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header({ onToggleSidebar, componentName }) {
  const navigate = useNavigate();

  const handleBrowseComponents = () => {
    navigate('/component_select');
  };

  return (
    <nav className="w-full h-20 md:h-24 lg:h-28 flex items-center justify-between px-4 md:px-8 bg-black">
      {/* Logo - Left */}
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="APP.UI Logo" 
          className="h-12 md:h-16 lg:h-20 w-auto mr-3"
        />
        <div className="text-white font-black tracking-tighter" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.08em', lineHeight: '1' }}>
          APP.UI
        </div>
        <span className="text-white/40 text-xs ml-2 mt-4">©2025</span>
      </div>

      {/* Component Name - Middle */}
      <div className="flex-1 max-w-md mx-4 md:mx-8 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          {componentName || 'Select a Component'}
        </h2>
      </div>

      {/* Right side - Navigation */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <a href="#" className="text-white/90 text-xs md:text-sm font-medium hover:text-white transition-colors">
          About us
        </a>
        <button
          onClick={handleBrowseComponents}
          className="text-white/90 text-xs md:text-sm font-medium hover:text-white transition-colors cursor-pointer"
        >
          Browse Components
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white hover:text-gray-300 transition-colors"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>
    </nav>
  );
}
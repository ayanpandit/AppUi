import React from 'react';
import { Menu } from 'lucide-react';

export default function Header({ onToggleSidebar }) {
  return (
    <div className="w-full h-full flex items-center justify-center text-xl font-bold text-white bg-gray-900 relative">
      This is the Header
      <button 
        className="md:hidden absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>
    </div>
  );
}

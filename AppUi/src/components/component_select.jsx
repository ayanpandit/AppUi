import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../landing_page/footer';
import SearchBar from './header_search';
import componentSelectBg from '../assets/component_selectbg.jpg';

export default function ComponentSelect() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/page_divider', { state: { category } });
  };

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${componentSelectBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <SearchBar onSearch={(query) => console.log('Search:', query)} />
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        <div 
          onClick={() => handleCategoryClick('navbar')}
          className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000 flex items-center justify-center cursor-pointer group overflow-hidden">
          
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl"></div>
          </div>
          
          {/* Text content */}
          <div className="relative z-10 text-center">
            <h3 className="text-6xl font-black tracking-tight text-white group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              NAVBAR
            </h3>
            <p className="text-white/60 text-xs mt-3 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              Navigation Components
            </p>
            
            {/* Decorative lines */}
            <div className="mt-4 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/50 transition-colors duration-300"></div>
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

        <div className="relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-2xl p-6 min-h-[240px] border-t-4 border-l-4 border-gray-400 border-r-4 border-b-4 border-r-gray-800 border-b-gray-900 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.9)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] transform-gpu perspective-1000">
        </div>

      </div>
      </div>
      <Footer />
    </div>
  );
}
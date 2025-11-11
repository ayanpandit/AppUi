import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../landing_page/footer';
import SearchBar from './header_search';
import componentSelectBg from '../assets/component_selectbg.jpg';

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/page_divider', { state: { category } });
  };

  return (
    <div className="min-h-screen bg-black">
      <SearchBar onSearch={(query) => console.log('Search:', query)} />
      <div className="flex justify-end max-w-7xl mx-auto mb-4">
        <button
          className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition-colors text-xs font-bold tracking-wider uppercase"
          onClick={() => navigate('/about')}
        >
          About Us
        </button>
      </div>
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        
        <div 
          onClick={() => handleCategoryClick('navbar')}
          className="group relative bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden">
          
          {/* Text content */}
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white transition-transform duration-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              NAVBAR
            </h3>
            <p className="text-white/60 text-xs mt-3 tracking-wider uppercase">
              Navigation Components
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

      </div>
      </div>
      <Footer />
    </div>
  );
}
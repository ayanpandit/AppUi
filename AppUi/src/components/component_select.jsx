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
    <div className="min-h-screen bg-black">
      <SearchBar onSearch={(query) => console.log('Search:', query)} />
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        
        <div 
          onClick={() => handleCategoryClick('navbar')}
          className="group relative bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white transition-transform duration-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              NAVBAR
            </h3>
            <p className="text-white/60 text-xs mt-3 tracking-wider uppercase">
              Navigation Components
            </p>
          </div>
        </div>

        <div onClick={() => handleCategoryClick('hero')} className="group relative bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">HERO</h3>
            <p className="text-white/60 text-xs mt-2 uppercase">Hero Sections</p>
          </div>
        </div>

        <div onClick={() => handleCategoryClick('features')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">FEATURES</h4>
          <p className="text-white/60 text-xs mt-2">Benefit lists & feature grids</p>
        </div>

        <div onClick={() => handleCategoryClick('ctas')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">CTAS</h4>
          <p className="text-white/60 text-xs mt-2">Call-to-action blocks</p>
        </div>

        <div onClick={() => handleCategoryClick('forms')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">FORMS</h4>
          <p className="text-white/60 text-xs mt-2">Login, signup & contact forms</p>
        </div>

        <div onClick={() => handleCategoryClick('cards')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">CARDS</h4>
          <p className="text-white/60 text-xs mt-2">Profile & feature cards</p>
        </div>

        <div onClick={() => handleCategoryClick('pricing')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">PRICING</h4>
          <p className="text-white/60 text-xs mt-2">Pricing tables & plans</p>
        </div>

        <div onClick={() => handleCategoryClick('testimonials')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">TESTIMONIALS</h4>
          <p className="text-white/60 text-xs mt-2">Quotes & user reviews</p>
        </div>

        <div onClick={() => handleCategoryClick('blog')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">BLOG</h4>
          <p className="text-white/60 text-xs mt-2">Article previews & listings</p>
        </div>

        <div onClick={() => handleCategoryClick('footer')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">FOOTER</h4>
          <p className="text-white/60 text-xs mt-2">Footer layouts & socials</p>
        </div>

        <div onClick={() => handleCategoryClick('icons')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">ICONS</h4>
          <p className="text-white/60 text-xs mt-2">Icon sets & buttons</p>
        </div>

        <div onClick={() => handleCategoryClick('layouts')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">LAYOUTS</h4>
          <p className="text-white/60 text-xs mt-2">Grid & section templates</p>
        </div>

        <div onClick={() => handleCategoryClick('tables')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">TABLES</h4>
          <p className="text-white/60 text-xs mt-2">Data tables & listings</p>
        </div>

        <div onClick={() => handleCategoryClick('misc')} className="group bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <h4 className="text-white text-lg font-semibold">MISC</h4>
          <p className="text-white/60 text-xs mt-2">Utilities & small components</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[200px] md:min-h-[240px] border border-white/10 hover:bg-white/10 transition-all duration-300">
        </div>

      </div>
      </div>
      <Footer />
    </div>
  );
}
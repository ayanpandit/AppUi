import React, { useState } from 'react';
import Header from './header';
import SideNav from './side_nav';
import MainArea from './main_area';
import Footer from '../landing_page/footer';

export default function PageDivider() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header - Fixed height */}
      <div className="w-full h-16 flex-shrink-0">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Middle Section - Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:block overflow-y-auto`}>
          <SideNav />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto md:ml-0">
          <MainArea />
        </div>
      </div>

      {/* Footer - Fixed height */}
      <div className="w-full h-16 flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}
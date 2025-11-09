import React from 'react';
import Header from './header';
import SideNav from './side_nav';
import MainArea from './main_area';
import Footer from '../landing_page/footer';

export default function PageDivider() {
  return (
    <div className="flex gap-[2%] flex-wrap content-start min-h-screen">
      <div className="w-full h-[5%]">
        <Header />
      </div>
      <div className="w-1/4 h-3/4">
        <SideNav />
      </div>
      <div className="grow h-3/4">
        <MainArea />
      </div>
      <div className="w-full h-[5%]">
        <Footer />
      </div>
    </div>
  );
}
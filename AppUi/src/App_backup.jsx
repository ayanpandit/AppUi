import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./landing_page/hero";
import AboutSection from "./landing_page/aboutsection";
import { Testimonials } from "./landing_page/testimonials";
import Footer from "./landing_page/footer";
import PageDivider from "./components/page_divider";
import ComponentSelect from "./components/component_select";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/page_divider" element={<PageDivider />} />
        <Route path="/component_select" element={<ComponentSelect />} />
      </Routes>
    </HashRouter>
  );
}
export default App;

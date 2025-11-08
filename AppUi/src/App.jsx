import HeroSection from "./landing_page/hero";
import AboutSection from "./landing_page/aboutsection";
import { Testimonials } from "./landing_page/testimonials";
import Footer from "./landing_page/footer";

function App ()
{
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <Testimonials />
            <Footer />
        </div>
    )
}
export default App;
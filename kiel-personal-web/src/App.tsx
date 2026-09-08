import "./index.css";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import SkillSection from "./components/sections/SkillSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

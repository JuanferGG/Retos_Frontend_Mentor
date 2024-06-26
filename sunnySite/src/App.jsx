import "./App.css";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { FooterSection } from "./components/Footer/FooterSection";

import { HomeSection } from "./components/HomeSection/HomeSection";
import { ImagesSection } from "./components/ImagesSection/ImagesSection";
import { Projects } from "./components/Projects/Projects";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { HeaderComponent } from "./components/header/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <Projects />
      <ImagesSection />
      <FooterSection />
    </>
  );
}

export default App;

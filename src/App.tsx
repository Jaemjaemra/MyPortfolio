
import { useEffect, useState } from "react";
import "./Style.css";

import dayBanner from "./assets/banner-day.gif";
import nightBanner from "./assets/banner-night.gif";
import resume from "./assets/RESUME MARSYA ATHIRAH.pdf";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import JoinerEducation from "./sections/JoinerEducation";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("portfolio-theme") === "dark"
  );

  const currentBanner = isDark ? nightBanner : dayBanner;

  useEffect(() => {
    const theme = isDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [isDark]);

  return (
    <div className="portfolio">
      <Navbar
        isDark={isDark}
        onToggle={() => setIsDark(!isDark)}
      />

      <header className="full-header">
        <div className="image-container">
          <img
            src={currentBanner}
            alt="Floral portfolio banner"
            className="portfolio-banner"
          />
        </div>
      </header>

      <Hero resumeUrl={resume} />
      <About />
      <JoinerEducation />
      <Skills />
      <Projects />
      <Contact />

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;

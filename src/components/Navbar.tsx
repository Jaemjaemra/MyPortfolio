
import { useState } from "react";
import SwitchMode from "./SwitchMode";

type NavbarProps = {
  isDark: boolean;
  onToggle: () => void;
};

function Navbar({ isDark, onToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`navbar-shell ${isOpen ? "is-open" : ""}`}>

      {/* NAVBAR TRIGGER */}
      <button
        type="button"
        className="navbar-trigger"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <span>MARSYA ATHIRAH</span>
        <span>⋆.𐙚 ̊</span>
        <span className="navbar-trigger-icon">
          {isOpen ? "ʚɞ" : "ɞ"}
        </span>
      </button>

      {/* NAVIGATION PANEL */}
      <nav className="navbar">

        <div className="nav-links">
          <a href="#home" onClick={closeNavbar}>Home</a>
          <a href="#about" onClick={closeNavbar}>About</a>
          <a href="#education" onClick={closeNavbar}>Education</a>
          <a href="#skills" onClick={closeNavbar}>Skills</a>
          <a href="#projects" onClick={closeNavbar}>Projects</a>
          <a href="#contact" onClick={closeNavbar}>Contact</a>
        </div>

        <SwitchMode
          isDark={isDark}
          onToggle={onToggle}
        />

      </nav>
    </div>
  );
}

export default Navbar;

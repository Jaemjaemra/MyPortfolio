
type HeroProps = {
  resumeUrl: string;
};

function Hero({ resumeUrl }: HeroProps) {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Creative Ideas,
          <br />
          <span>Digital Experiences.</span>
        </h1>

        <p className="hero-description">
          Hi! I am an Information Technology student interested in
          web development, game development and creative digital design.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button">
            Explore My Projects
          </a>

          <a
            href={resumeUrl}
            download="Marsya_Athirah_Resume.pdf"
            className="hero-button resume-button"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-decoration" aria-hidden="true">
        *
      </div>
    </section>
  );
}

export default Hero;

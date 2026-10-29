import { useEffect, useState } from "react";
import "./Style.css";
import bannerImage from "./assets/Website Portfolio.png";

type Skill = {
  name: string;
  level: string;
  percentage: number;
};

const technicalSkills: Skill[] = [
  { name: "HTML & CSS", level: "Comfortable", percentage: 70 },
  { name: "JavaScript", level: "Basic", percentage: 50 },
  { name: "React", level: "Basic", percentage: 40 },
  { name: "TypeScript", level: "Basic", percentage: 35 },
  { name: "C#", level: "Advanced", percentage: 80 },
  { name: "Java", level: "Intermediate", percentage: 60 },
  { name: "Unity", level: "Advanced", percentage: 80 },
  { name: "MySQL", level: "Basic", percentage: 50 },
  { name: "Adobe Tools", level: "Basic", percentage: 55 },
  { name: "Microsoft Office", level: "Advanced", percentage: 80 },
];

function SkillModal({
  skill,
  onClose,
}: {
  skill: Skill;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="skill-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="skill-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="skill-modal-title"
      >
        <button
          type="button"
          className="skill-modal-close"
          onClick={onClose}
          aria-label="Close skill details"
        >
          &times;
        </button>

        <p className="skill-modal-label">TECHNICAL SKILL</p>

        <h2 id="skill-modal-title">{skill.name}</h2>

        <p className="skill-modal-description">
          My current proficiency in {skill.name}.
        </p>

        <div className="skill-modal-info">
          <span>Skill level</span>
          <strong>{skill.level}</strong>
        </div>

        <div className="skill-modal-info">
          <span>Proficiency</span>
          <strong>{skill.percentage}%</strong>
        </div>

        <div
          className="skill-modal-progress"
          role="progressbar"
          aria-label={`${skill.name} proficiency`}
          aria-valuenow={skill.percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="skill-modal-progress-fill"
            style={{ width: `${skill.percentage}%` }}
          />
        </div>

        <p className="skill-modal-note">
          Skill levels represent my current self-assessment.
        </p>
      </div>
    </div>
  );
}

function App() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const closeSkillModal = () => setSelectedSkill(null);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          MARSYA ATHIRAH<span>⋆.𐙚 ̊</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* BANNER */}
      <header className="full-header">
        <div className="image-container">
          <img
            src={bannerImage}
            alt="Portfolio banner"
            className="banner-img"
          />
        </div>
      </header>

      {/* HERO */}
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

          <a href="#projects" className="hero-button">
            Explore My Projects
          </a>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          *
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <h2>About Me</h2>

        <p className="section-description">
          I am an Information Technology student who enjoys exploring
          web development, game development and digital design. I like
          learning new tools and turning ideas into interactive projects.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <h2>My Skills</h2>

        <div className="skills-layout">
          {/* TECHNICAL SKILLS */}
          <div className="skills-category">
            <h3>Technical Skills</h3>

            <p className="section-description">
              Click a skill to explore my proficiency level.
            </p>

            <div className="skill-list technical-skill-list">
              {technicalSkills.map((skill) => (
                <button
                  type="button"
                  className="technical-skill-button"
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  aria-haspopup="dialog"
                >
                  {skill.name}
                  <span className="skill-button-icon" aria-hidden="true">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="skills-category">
            <h3>Soft Skills</h3>

            <div className="skill-list">
              <span>Communication</span>
              <span>Teamwork</span>
              <span>Problem Solving</span>
              <span>Creativity</span>
              <span>Time Management</span>
              <span>Adaptability</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <h2>My Projects</h2>

        <div className="project-grid">
          <article className="project-card">
            <p className="project-category">FINAL YEAR PROJECT</p>
            <h3>Brew Story</h3>
            <p>
              A 3D coffee shop simulation game where players prepare
              beverages and serve customers.
            </p>
            <p className="project-tech">Unity · C#</p>
            <div className="project-video-links">
              <a 
               href= "https://drive.google.com/file/d/1tOh0jQe-ktwZGH2T-pgvDTUDEGFqYkVo/view?usp=drive_link"
               target="_blank"
               rel="https://drive.google.com/file/d/1tOh0jQe-ktwZGH2T-pgvDTUDEGFqYkVo/view?usp=drive_link"
               className="project-video-link"
               >
                <span>▶</span> Watch Trailer
               </a>

               <a
                 href="https://drive.google.com/file/d/1Z0N_phxLJMUFZpYOL6IIDJjwFT9aEH30/view?usp=drive_link"
                 target="_blank"
                 rel="https://drive.google.com/file/d/1Z0N_phxLJMUFZpYOL6IIDJjwFT9aEH30/view?usp=drive_link"
                 className="project-video-link"
                 >
                  <span>▶</span> Gameplay Demo
                 </a>
            </div>
          </article>

          <article className="project-card">
            <p className="project-category">WEB DEVELOPMENT</p>
            <h3>Skincare Website</h3>
            <p>
              An upcoming informational skincare website focused on
              skincare products, skincare knowledge, and a clean,
              user-friendly interface.
            </p>
            <p className="project-tech">Coming Soon</p>
          </article>

          <article className="project-card">
            <p className="project-category">GAME DEVELOPMENT</p>
            <h3>SpeakTown</h3>
            <p>
              A 2D educational language game created as a course project.
            </p>
            <p className="project-tech">Unity · C#</p>

            <div className="project-video-links">
             <a 
               href="https://drive.google.com/file/d/1soWlmSCYoWQAq1VTJbjuwuHJnyw9Q1H6/view?usp=drive_link"
               target="_blank"
               rel="https://drive.google.com/file/d/1soWlmSCYoWQAq1VTJbjuwuHJnyw9Q1H6/view?usp=drive_link"
               className="project-video-link"
               >
                <span>▶</span> Watch Gameplay Demo
                </a>
              </div>
          </article>

          <article className="project-card">
            <p className="project-category">WEB DEVELOPMENT</p>
            <h3>Seoulify</h3>
            <p>
              A K-pop merchandise shopping website featuring a modern, user-friendly interface inspired by Korean pop culture.
            </p>
            <p className="project-tech">React · TypeScript · SpringBoot · MySQL </p>

            <div className="project-video-links">
              <a
              href="https://jaemjaemra.github.io/SeoulifyStore/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-video-link"
              >
               Visit Website ↗
              </a>

              <a 
               href="https://drive.google.com/file/d/15pTmDXDr_frvkyPod9rYgyZsw5R_5Fw1/view?usp=drive_link"
               target="_blank"
               rel= "noopener noreferrer"
               className="project-video-link"
               >
                <span>▶</span>Watch Demo
               </a>

            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="contact-card">
          <h2>Let's Connect</h2>

          <p className="section-description">
            Feel free to contact me for internship opportunities
            and collaboration.
          </p>

          <a
            href="mailto:marsyaathirah651@gmail.com?subject=Internship%20Opportunity"
             target="_blank"
             rel="noopener noreferrer"
             className="hero-button"
          >
            Contact Me
          </a>
        </div>

        <div className="social-links"> 
          <a 
            href="https://www.instagram.com/mrsyathira/"
            target="_blank"
            rel= "https://www.instagram.com/mrsyathira/"
            aria-label="Instagram"
            className="social-icon Instagram"
            >
              <img src ="https://i.pinimg.com/736x/c2/4d/ef/c24defbbac634b98524f0c76b4cf8be6.jpg" alt="Instagram" /> 
            </a>

             <a 
            href="https://github.com/Jaemjaemra"
            target="_blank"
            rel= "https://github.com/Jaemjaemra"
            aria-label="Github"
            className="social-icon Github"
            >
              <img src ="https://i.pinimg.com/736x/dc/e8/80/dce8802c218333b34e9b8bdc3a6be58c.jpg" alt="Github" /> 
            </a>

             <a 
            href="https://www.linkedin.com/in/marsya-athirah-771bb6255/"
            target="_blank"
            rel= "https://www.linkedin.com/in/marsya-athirah-771bb6255/"
            aria-label="Linkedin"
            className="social-icon Linkedin"
            >
              <img src ="https://i.pinimg.com/736x/70/74/2f/70742f73acb5235271e90deae74b0037.jpg" alt="Linkedin" /> 
            </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>

      {/* SKILL POP-UP */}
      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={closeSkillModal}
        />
      )}
    </div>
  );
}

export default App;
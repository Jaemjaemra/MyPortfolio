import { useCallback, useEffect, useState } from "react";

import "./Style.css";

import bannerImage from "./assets/Website Portfolio.png";

import SwitchMode from "./components/SwitchMode";
import SplitButton from "./components/SplitButton";

// ==============================
// TYPES
// ==============================

type Skill = {
  name: string;
  level: string;
  percentage: number;
};

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  website?: string;
  demo?: string;
  trailer?: string;
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

// ==============================
// DEFAULT PROJECTS
// ==============================

const defaultProjects: Project[] = [
  {
    id: "brew-story",
    title: "Brew Story",
    category: "FINAL YEAR PROJECT",
    description:
      "A 3D coffee shop simulation game where players prepare beverages and serve customers.",
    tech: ["Unity", "C#"],
    trailer:
      "https://drive.google.com/file/d/1tOh0jQe-ktwZGH2T-pgvDTUDEGFqYkVo/view?usp=drive_link",
    demo:
      "https://drive.google.com/file/d/1Z0N_phxLJMUFZpYOL6IIDJjwFT9aEH30/view?usp=drive_link",
  },
  {
    id: "skincare-website",
    title: "Skincare Website",
    category: "WEB DEVELOPMENT",
    description:
      "An upcoming informational skincare website focused on skincare products, skincare knowledge, and a clean, user-friendly interface.",
    tech: ["Coming Soon"],
  },
  {
    id: "speaktown",
    title: "SpeakTown",
    category: "GAME DEVELOPMENT",
    description:
      "A 2D educational language game created as a course project.",
    tech: ["Unity", "C#"],
    demo:
      "https://drive.google.com/file/d/1soWlmSCYoWQAq1VTJbjuwuHJnyw9Q1H6/view?usp=drive_link",
  },
  {
    id: "seoulify",
    title: "Seoulify",
    category: "WEB DEVELOPMENT",
    description:
      "A K-pop merchandise shopping website featuring a modern, user-friendly interface inspired by Korean pop culture.",
    tech: ["React", "TypeScript", "Spring Boot", "MySQL"],
    website: "https://jaemjaemra.github.io/SeoulifyStore/",
    demo:
      "https://drive.google.com/file/d/15pTmDXDr_frvkyPod9rYgyZsw5R_5Fw1/view?usp=drive_link",
  },
];

// ==============================
// SKILL MODAL
// ==============================

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

// ==============================
// APP
// ==============================

function App() {
  // THEME
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("portfolio-theme") === "dark"
  );

  useEffect(() => {
    const theme = isDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [isDark]);

  // SKILL MODAL
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const closeSkillModal = useCallback(() => {
    setSelectedSkill(null);
  }, []);

  // PROJECTS
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const savedProjects = localStorage.getItem("portfolio-projects");

      return savedProjects
        ? JSON.parse(savedProjects) as Project[]
        : defaultProjects;
    } catch {
      return defaultProjects;
    }
  });

  // NEW PROJECT FORM
  const [newProjectCategory, setNewProjectCategory] = useState<string | null>(
    null
  );

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTech, setProjectTech] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [projectDemo, setProjectDemo] = useState("");

  // SAVE PROJECTS
  useEffect(() => {
    localStorage.setItem("portfolio-projects", JSON.stringify(projects));
  }, [projects]);

  // ADD PROJECT
  const handleAddProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newProjectCategory) return;

    const newProject: Project = {
      id: crypto.randomUUID(),
      title: projectTitle.trim(),
      category:
        newProjectCategory === "Other"
          ? "OTHER"
          : newProjectCategory.toUpperCase(),
      description: projectDescription.trim(),
      tech: projectTech
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      website: projectWebsite.trim() || undefined,
      demo: projectDemo.trim() || undefined,
    };

    setProjects((previousProjects) => [...previousProjects, newProject]);

    // RESET FORM
    setProjectTitle("");
    setProjectDescription("");
    setProjectTech("");
    setProjectWebsite("");
    setProjectDemo("");
    setNewProjectCategory(null);
  };

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

        <SwitchMode
          isDark={isDark}
          onToggle={() => setIsDark(!isDark)}
        />
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

        {/* ADD PROJECT BUTTON */}
        <SplitButton
          mainButton="New Project"
          buttons={["Web Development", "Game Development", "Other"]}
          onSelect={(category) => setNewProjectCategory(category)}
        />

        {/* NEW PROJECT FORM */}
        {newProjectCategory && (
          <div className="project-form-container">
            <form className="project-form" onSubmit={handleAddProject}>
              <h3>Add New Project</h3>

              <p className="project-form-category">
                Category: {newProjectCategory}
              </p>

              <label htmlFor="project-title">Project Title</label>
              <input
                id="project-title"
                type="text"
                value={projectTitle}
                onChange={(event) => setProjectTitle(event.target.value)}
                placeholder="Enter project title"
                required
              />

              <label htmlFor="project-description">Description</label>
              <textarea
                id="project-description"
                value={projectDescription}
                onChange={(event) =>
                  setProjectDescription(event.target.value)
                }
                placeholder="Describe your project"
                required
              />

              <label htmlFor="project-tech">
                Technologies (separate with commas)
              </label>
              <input
                id="project-tech"
                type="text"
                value={projectTech}
                onChange={(event) => setProjectTech(event.target.value)}
                placeholder="React, TypeScript, CSS"
              />

              <label htmlFor="project-website">Website Link (optional)</label>
              <input
                id="project-website"
                type="url"
                value={projectWebsite}
                onChange={(event) => setProjectWebsite(event.target.value)}
                placeholder="https://example.com"
              />

              <label htmlFor="project-demo">Demo Link (optional)</label>
              <input
                id="project-demo"
                type="url"
                value={projectDemo}
                onChange={(event) => setProjectDemo(event.target.value)}
                placeholder="https://example.com/demo"
              />

              <div className="project-form-actions">
                <button type="submit" className="project-form-submit">
                  Add Project
                </button>

                <button
                  type="button"
                  className="project-form-cancel"
                  onClick={() => setNewProjectCategory(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PROJECT GRID */}
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p className="project-tech">
                {project.tech.join(" · ")}
              </p>

              {/* PROJECT LINKS - ORIGINAL BUTTON STYLE */}
              {(project.website || project.trailer || project.demo) && (
                <div className="project-video-links">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-video-link"
                    >
                      Visit Website ↗
                    </a>
                  )}

                  {project.trailer && (
                    <a
                      href={project.trailer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-video-link"
                    >
                      <span>▶</span> Watch Trailer
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-video-link"
                    >
                      <span>▶</span> {project.title === "SpeakTown"
                        ? "Watch Gameplay Demo"
                        : "Watch Demo"}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
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
            className="hero-button"
          >
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://www.instagram.com/mrsyathira/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-icon Instagram"
          >
            <img
              src="https://i.pinimg.com/736x/c2/4d/ef/c24defbbac634b98524f0c76b4cf8be6.jpg"
              alt="Instagram"
            />
          </a>

          <a
            href="https://github.com/Jaemjaemra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="social-icon Github"
          >
            <img
              src="https://i.pinimg.com/736x/dc/e8/80/dce8802c218333b34e9b8bdc3a6be58c.jpg"
              alt="Github"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/marsya-athirah-771bb6255/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="social-icon Linkedin"
          >
            <img
              src="https://i.pinimg.com/736x/70/74/2f/70742f73acb5235271e90deae74b0037.jpg"
              alt="Linkedin"
            />
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
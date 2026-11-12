
import { useCallback, useState } from "react";

import { technicalSkills } from "../data/skills";
import type { Skill } from "../data/skills";
import SkillModal from "../components/SkillModal";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const closeSkillModal = useCallback(() => {
    setSelectedSkill(null);
  }, []);

  return (
    <section className="section skills-section" id="skills">
      <h2>My Skills</h2>

      <div className="skills-layout">
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

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={closeSkillModal}
        />
      )}
    </section>
  );
}

export default Skills;


import { useEffect } from "react";
import type { Skill } from "../data/skills";

type SkillModalProps = {
  skill: Skill;
  onClose: () => void;
};

function SkillModal({ skill, onClose }: SkillModalProps) {
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

export default SkillModal;

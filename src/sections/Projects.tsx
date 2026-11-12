
import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "../lib/supabase";
import SplitButton from "../components/SplitButton";
import ProjectStack from "../components/ProjectStack/ProjectStack";

function Projects() {
  const [refreshKey, setRefreshKey] = useState(0);

  const [newProjectCategory, setNewProjectCategory] = useState<string | null>(null);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTech, setProjectTech] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [projectDemo, setProjectDemo] = useState("");

  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleAddProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newProjectCategory) return;

    setSaving(true);
    setFormError(null);

    const techArray = projectTech
      .split(",")
      .map((technology) => technology.trim())
      .filter(Boolean);

    const { error } = await supabase.from("projects").insert([
      {
        title: projectTitle.trim(),
        category: newProjectCategory,
        description: projectDescription.trim(),
        tech: techArray,
        website: projectWebsite.trim() || null,
        demo: projectDemo.trim() || null,
        trailer: null,
        image_url: null,
      },
    ]);

    setSaving(false);

    if (error) {
      console.error("Error adding project:", error);
      setFormError(error.message);
      return;
    }

    setProjectTitle("");
    setProjectDescription("");
    setProjectTech("");
    setProjectWebsite("");
    setProjectDemo("");
    setNewProjectCategory(null);
    setRefreshKey((previous) => previous + 1);
  };

  return (
    <section className="section projects-section" id="projects">
      <h2>My Projects</h2>

      <SplitButton
        mainButton="New Project"
        buttons={["Web Development", "Game Development", "Other"]}
        onSelect={(category) => {
          setNewProjectCategory(category);
          setFormError(null);
        }}
      />

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
              onChange={(event) => setProjectDescription(event.target.value)}
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

            {formError && (
              <p className="project-form-error">{formError}</p>
            )}

            <div className="project-form-actions">
              <button
                type="submit"
                className="project-form-submit"
                disabled={saving}
              >
                {saving ? "Saving..." : "Add Project"}
              </button>

              <button
                type="button"
                className="project-form-cancel"
                onClick={() => {
                  setNewProjectCategory(null);
                  setFormError(null);
                }}
                disabled={saving}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <ProjectStack refreshKey={refreshKey} />
    </section>
  );
}

export default Projects;

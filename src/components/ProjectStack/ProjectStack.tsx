
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { supabase } from "../../lib/supabase";
import type { Project } from "../../types";
import "./ProjectStack.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ProjectStackProps = {
  refreshKey: number;
};

function ProjectStack({ refreshKey }: ProjectStackProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const stackRef = useRef<HTMLElement | null>(null);

  // Fetch projects from Supabase
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
        setError(error.message);
      } else {
        setProjects(data ?? []);
      }

      setLoading(false);
    };

    fetchProjects();
  }, [refreshKey]);

  // 3D Stacking Animation
  useLayoutEffect(() => {
    const section = stackRef.current;

    if (!section || projects.length < 2) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".project-card")
    );

    const ctx = gsap.context(() => {
      // Initial card positions
      cards.forEach((card, index) => {
        gsap.set(card, {
         xPercent: -50,
         yPercent: -50,
         x: 0,
         y: index *-38 ,
         z: index * -35,
         scale: 1 - index * 0.04,
         rotationX: 0,
         rotationY: 0,
         zIndex: 100 - index,
         transformOrigin: "center center",
        force3D: true,
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length - 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Move each previous card backwards
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];

        timeline.set(
          nextCard,
          {
            zIndex: 100 + index,
          },
          index
        );


        // Previous card moves backwards into the stack
        timeline.to(
          card,
          {
            y: -40,
            z: -120,
            scale: 0.92,
            rotationX: 0,
            rotationY: 0,
            ease: "none",
          },
          index
        );

        // Next card moves forward
        timeline.to(
          nextCard,
          {
            y: 0,
            z: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            ease: "none",
          },
          index
        );
      });
    }, section);

    return () => ctx.revert();
  }, [projects]);

  if (loading) return <p>Loading projects...</p>;

  if (error) {
    return <p>Unable to load projects: {error}</p>;
  }


return (
  <section className="project-stack" ref={stackRef}>
    {projects.length === 0 ? (
      <p>No projects added yet.</p>
    ) : (
      <div className="project-stack-stage">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            
            {/* Folder tab */}
            <div className="project-tab">
              {project.title}
            </div>

            {/* Project content */}
            <div className="project-card-content">
              {project.image_url && (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech?.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-video-links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-video-link"
                  >
                    Demo ↗
                  </a>
                )}

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-video-link"
                  >
                    Preview ↗
                  </a>
                )}

                {project.trailer && (
                  <a
                    href={project.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-video-link"
                  >
                    Watch Trailer ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    )}
  </section>
);

}

export default ProjectStack;

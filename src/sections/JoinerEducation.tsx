
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import campusImage from "../assets/pmkl-campus.webp";
import "./joiner-education.css";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_TILES = 36;

function JoinerEducation() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Retake image - berada di luar useEffect
  const retakeImage = () => {
    const grid = gridRef.current;

    if (!grid) return;

    const tiles = gsap.utils.toArray<HTMLElement>(
      ".joiner-tile",
      grid
    );

    gsap.to(tiles, {
      x: () => gsap.utils.random(-120, 120),
      y: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-15, 15),
      duration: 0.8,
      stagger: {
        amount: 0.35,
        from: "random",
      },
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    const title = titleRef.current;

    if (!section || !grid || !title) return;

    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray<HTMLElement>(
        ".joiner-tile",
        grid
      );

      const lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.08,
      });

      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);

      const ticker = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      gsap.set(tiles, {
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-12, 12),
        opacity: 0.75,
      });

      gsap.to(tiles, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      const moveTiles = (event: MouseEvent) => {
        const rect = grid.getBoundingClientRect();

        const mouseX =
          (event.clientX - rect.left) / rect.width - 0.5;

        const mouseY =
          (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(tiles, {
          x: (index) =>
            mouseX * (index % 2 === 0 ? 12 : -12),
          y: (index) =>
            mouseY * (index % 2 === 0 ? 12 : -12),
          duration: 0.6,
          ease: "power2.out",
        });
      };

      grid.addEventListener("mousemove", moveTiles);

      return () => {
        grid.removeEventListener("mousemove", moveTiles);
        gsap.ticker.remove(ticker);
        lenis.destroy();
        lenisRef.current = null;
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section joiner-education"
      id="education"
    >
      <div className="joiner-sticky">
        <div className="joiner-heading">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div
          className="joiner-grid"
          ref={gridRef}
          onClick={retakeImage}
        >
          {Array.from({ length: TOTAL_TILES }, (_, index) => {
            const row = Math.floor(index / 6);
            const col = index % 6;

            return (
              <div
                key={index}
                className="joiner-tile"
                style={{
                  backgroundImage: `url(${campusImage})`,
                  backgroundSize: "600% 600%",
                  backgroundPosition: `${
                    (col / 5) * 100
                  }% ${(row / 5) * 100}%`,
                }}
              />
            );
          })}
        </div>

        <div className="joiner-education-card" ref={titleRef}>
          <p className="joiner-label">ACADEMIC BACKGROUND</p>
          <h3>Diploma in Information Technology</h3>
          <p>Politeknik METrO Kuala Lumpur</p>

          <div className="joiner-details">
            <div>
              <span>CGPA</span>
              <strong>3.55</strong>
            </div>

            <div>
              <span>EXPECTED GRADUATION</span>
              <strong>July 2027</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinerEducation;

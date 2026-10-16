import React, { useState } from "react";

export default function Projects() {
  // State untuk mengesan kad projek mana yang sedang di-hover (mengikut index)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const myProjects = [
    {
      title: "Speaktown : Lets Learn",
      description:
        "This is my first mini project me and my team made based on what we pick from our lecturer.",
      link: "https://drive.google.com/file/d/1soWlmSCYoWQAq1VTJbjuwuHJnyw9Q1H6/view?usp=drive_link",
      status: "See Progress",
    },
    {
      title: "Brew Story",
      description:
        "This is my final year project and made a collaboration with Wariscan and Kopi Saigon.",
      link: [
        {name : "Gameplay", url : "https://drive.google.com/file/d/1Z0N_phxLJMUFZpYOL6IIDJjwFT9aEH30/view?usp=drive_link"},
        {name : "Trailer", url : "https://drive.google.com/file/d/1tOh0jQe-ktwZGH2T-pgvDTUDEGFqYkVo/view?usp=drive_link"},
      ],
      status: "See Progress",
    },
    {
      title: "MoVies",
      description:
        "This is my second project, build a website for myself recommended movies and tv shows and list all of my upcoming and complete watch.",
      link: "",
      status: "In Progress",
    },
    {
      title: "Seoulify Store",
      description:
        "Hello, Marsya here! 👋This is my third website, created for my portfolio and to gain more experience in web development. I made this K-pop store just for fun while learning and exploring web development. I’m still learning, but I’m enjoying the process! 💗",
      link: "https://drive.google.com/file/d/1JKK7ONK_l_y98yKHy3cdnXs5XK-NTirE/view?usp=drive_link",
      status: "See Progress",
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.projectGrid}>
        {myProjects.map((project, index) => {
          // Semak sama ada kad ini sedang di-hover
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                ...styles.projectCard,
                // Beri kesan 'transform' meninggi dan panjangkan tinggi minimum kad bila di-hover
                transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                boxShadow: isHovered
                  ? "0 8px 20px rgba(216, 162, 162, 0.4)"
                  : "none",
              }}
            >
              <div
                style={{
                  background: "#C28888",
                  height: "140px",
                  width: "100%",
                }}
              ></div>
              <div style={{ padding: "15px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "5px" }}>
                  {project.title}
                </h3>
                
                {/* Bahagian Description yang akan auto expand */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#555",
                    // Jika di-hover, paparkan semua teks (tnh/clamp dibuang), jika tidak hadkan kepada 2 baris
                    display: "-webkit-box",
                    WebkitLineClamp: isHovered ? "unset" : "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    transition: "all 0.3s ease",
                  }}
                >
                  {project.description}
                </p>

               <div style={{ marginTop: "auto", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {Array.isArray(project.link) ? (
                    // Jika link berbentuk senarai (seperti Brew Story yang ada Gameplay & Trailer)
                    project.link.map((btn, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={btn.url}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.linkButton}
                      >
                        {btn.name} &rarr;
                      </a>
                    ))
                  ) : project.link === "#" || project.link === "" ? (
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "10px",
                        color: "#A68A8A",
                        fontStyle: "italic",
                        fontSize: "0.9rem",
                      }}
                    >
                      {project.status}
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.link}
                    >
                      {project.status} &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Kotak Tambahan New Project */}
        <div
          onClick={() => {
            alert("Boleh tambah projek baru di sini nanti! ✨");
          }}
          style={{
            ...styles.projectCard,
            border: "2px dashed #D8A2A2",
            background: "transparent",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "180px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <span style={{ color: "#D8A2A2", fontWeight: "bold" }}>
            + New Project
          </span>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    marginBottom: "30px",
    background: "#FFF9D6",
    padding: "20px",
    borderRadius: "19px",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginTop: "15px",
  },
  projectCard: {
    background: "#FFDCDC",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "220px",
    transition: "all 0.3s ease", // Membuatkan animasi pergerakan jadi lancar dan lembut
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#D8A2A2",
    textDecoration: "none",
    fontWeight: "bold",
  },
  linkButton: {
    display: "inline-block",
    marginTop: "10px",
    color: "#D8A2A2",
    textDecoration: "none",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
};
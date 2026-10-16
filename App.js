import React from "react";
import "./styles.css";
import myPhoto from "./Website Portfolio.png";
import bgImage from "./Background.png";
import BannerImage from "./AboutmeBanner.png";
import TiktokIcon from "./Tiktok icon.jpg";
import InstaIcon from "./Instagram icon.jpg";
import MyProject from "./MyProjectBanner.png";
import ContactMe from "./contactme.png";
import Myself from "./Myself.png";
import Projects from "./Project"; // Mengimport fail Projects yang telah diasingkan

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* NavBar */}
      <nav style={styles.navbar}>
        {/* Ikon Media Sosial di Kiri */}
        <div style={styles.navIconsGroup}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={styles.navIcon}
          >
            <img src={InstaIcon} alt="Instagram" style={styles.AppIcon} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noreferrer"
            style={styles.navIcon}
          >
            <img src={TiktokIcon} alt="Tiktok" style={styles.AppIcon} />
          </a>
        </div>

        {/* Menu Teks di Kanan */}
        <div style={styles.navLinksGroup}>
          <a href="#about" style={styles.navLink}>
            About Me
          </a>
          <a href="#projects" style={styles.navLink}>
            Project
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </div>
      </nav>

      {/* Banner Lebar Penuh (Full-Width) */}
      <header style={styles.fullHeader}>
        <div style={styles.imageContainer}>
          <img src={myPhoto} alt="JAEMJAEMRA" style={styles.profileImg} />
        </div>
      </header>

      <div style={styles.container}>
        {/* About me Banner */}
        <div style={styles.aboutBanner}>
          <img src={BannerImage} alt="Banner" style={styles.profileImg} />
        </div>

        {/* Section About Me dengan Layout Majalah */}
        <section id="about" style={styles.aboutSection}>
          <div style={styles.magazineLayout}>
            {/* Kolom Kiri: Myphoto */}
            <div style={styles.magazineImageContainer}>
              <img src={Myself} alt="Myself" style={styles.colProfileImg} />
            </div>

            {/* KOLOM KANAN: Semua Teks & Informasi (About, Skills, Journey) */}
            <div style={styles.magazineTextContainer}>
              {/* Bagian About Me */}
              <div style={styles.textBlock}>
                <h2 style={styles.editorialTitle}>about me</h2>
                <p style={styles.editorialText}>
                  My real name is Marsya Athirah Binti Noor Hisham, 20 years
                  old, staying in Gombak, and currently studying Information
                  Technology with a focus on Game Development at POLITEKNIK
                  METRO KUALA LUMPUR.
                </p>
              </div>

              {/* Bagian Skills & Journey */}
              <div style={styles.rightSubGrid}>
                <div style={styles.textBlock}>
                  <h2 style={styles.editorialTitle}>skills</h2>

                  {/* Skill 1 */}
                  <div style={styles.skillContainer}>
                    <span style={styles.skillName}>Game Development</span>
                    <div style={styles.progressBarBg}>
                      <div
                        style={{ ...styles.progressBarFill, width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Skill 2 */}
                  <div style={styles.skillContainer}>
                    <span style={styles.skillName}>Microsoft Tools</span>
                    <div style={styles.progressBarBg}>
                      <div
                        style={{ ...styles.progressBarFill, width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Skill 3 */}
                  <div style={styles.skillContainer}>
                    <span style={styles.skillName}>Frontend & Web Basics</span>
                    <div style={styles.progressBarBg}>
                      <div
                        style={{ ...styles.progressBarFill, width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* The Journey */}
                <div style={styles.collumnRight}>
                  <h2 style={styles.editorialTitle}>The Journey</h2>
                  <p style={styles.editorialSub}>
                    How I love programming & Development
                  </p>
                  <p style={styles.editorialText}>
                    My journey so far feels like it has its ups and downs, but I
                    still have plenty of time. Being young means nothing can
                    block me from achieving what I want. Whatever happens, I’ll
                    try my best—including pursuing things I love like dancing.
                    ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MyProjectBanner */}
        <div style={styles.aboutBanner}>
          <img src={MyProject} alt="Banner" style={styles.profileImg} />
        </div>

        {/* Paparan Komponen Projects */}
        <Projects />

        {/* Contactme Banner */}
        <div style={styles.aboutBanner}>
          <img src={ContactMe} alt="Banner" style={styles.profileImg} />
        </div>

        {/* Contact Section */}
        <section id="contact" style={styles.cuteContactSection}>
          <div style={styles.contactCard}>
            <h2 style={styles.editorialTitle}>Let's Connect 💌</h2>
            <p style={styles.editorialText}>Feel free to reach out. ✨</p>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <a
                href="mailto:Marsyaathirah651@gmail.com"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={styles.cuteContactButton}
              >
                <span>Send Me an Email</span> 🌸
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>Thanks for visiting my personal space! ✨</p>
        </footer>
      </div>
    </div>
  );
}

// Gaya Hiasan CSS untuk App.js
const styles = {
  fullHeader: {
    width: "100%",
    marginBottom: "30px",
  },
  imageContainer: {
    width: "100%",
    maxHeight: "750px",
    overflow: "hidden",
  },
  profileImg: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  },
  aboutBanner: {
    width: "100%",
    maxHeight: "150px",
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  aboutSection: {
    marginBottom: "40px",
    background: "transparent",
    padding: "80px 90px",
    width: "120%",
    marginLeft: "-210px",
  }, 
  magazineLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 1.6fr",
    gap: "30px",
    alignItems: "start",
  },
  magazineImageContainer: {
    width: "800px",
    padding: "0",
    margin: "0",
  },
  colProfileImg: {
    width: "70%",
    height: "80%",
    display: "block",
    objectFit: "cover",
    margin: "0 auto",
  },
  magazineTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  rightSubGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
  },
  collumnRight: {
    display: "flex",
    flexDirection: "column",
  },
  skillContainer: {
    marginBottom: "12px",
  },
  skillName: {
    fontFamily: "EB Garamond, serif",
    fontSize: "0.9rem",
    color: "#555555",
    display: "block",
    marginBottom: "4px",
  },
  progressBarBg: {
    width: "100%",
    height: "8px",
    backgroundColor: "#E5D0D0",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4A3B32",
    borderRadius: "4px",
  },
  editorialTitle: {
    fontFamily: "EB Garamond, serif",
    fontStyle: "italic",
    fontSize: "1.8rem",
    color: "#4A3B32",
    marginBottom: "5px",
    fontWeight: "normal",
  },
  editorialSub: {
    fontFamily: "EB Garamond, serif",
    fontSize: "1rem",
    color: "#8C6A6A",
    marginBottom: "15px",
    fontStyle: "italic",
  },
  editorialText: {
    fontFamily: "EB Garamond, serif",
    fontSize: "1rem",
    color: "#555555",
    lineHeight: "1.7",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    marginBottom: "30px",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid #E5D0D0",
  },
  navLinksGroup: {
    display: "flex",
    gap: "35px",
  },
  navIconsGroup: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    color: "#8EA66B",
    fontFamily: "EB Garamond, serif",
    fontSize: "1.2rem",
    letterSpacing: "3px",
    transition: "color 0.3s",
  },
  navIcon: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  AppIcon: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  container: {
    fontFamily: "EB Garamond",
    padding: "0 20px 20px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    color: "#333",
    lineHeight: "1.6",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    color: "#666",
    borderTop: "1px solid #e5e7eb",
    paddingTop: "20px",
  },
  cuteContactSection: {
    marginBottom: "40px",
    background: "transparent",
    padding: "20px 0",
  },
  contactCard: {
    background: "#FFF9D6",
    border: "1px solid #D8A2A2",
    borderRadius: "15px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(216, 162, 162, 0.15)",
  },
  cuteContactButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#D8A2A2",
    color: "#ffffff",
    padding: "12px 28px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontFamily: "EB Garamond, serif",
    fontSize: "1rem",
    letterSpacing: "1px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  },
};
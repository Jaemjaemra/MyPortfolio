
function Contact() {
  return (
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
            src="https://i.pinimg.com/736x/70/74/2f/70742f73ac5bc5235271e90deae74b0037.jpg"
            alt="Linkedin"
          />
        </a>
      </div>
    </section>
  );
}

export default Contact;

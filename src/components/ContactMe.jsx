import "../App.css";

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-me-section">
      <span className="section-header-btn">Contact Me</span>
      <p>
        If you&apos;d like to get in touch, please message me at{" "}
        <a
          className="contact-me-btn"
          href="link:https://www.linkedin.com/in/waqqar-khan"
        >
          Waqqar@LinkedIn
        </a>
      </p>
    </section>
  );
};

export default ContactMe;

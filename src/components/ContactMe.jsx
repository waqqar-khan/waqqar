import "../App.css";

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-me-section">
      <h2>Contact Me</h2>
      <p>
        If you&apos;d like to get in touch, please message me at{" "}
        <button className="contact-me-btn">
          <a
            className="recommendation-linkedin"
            href="link:https://www.linkedin.com/in/waqqar-khan"
          >
            Waqqar@LinkedIn
          </a>
        </button>
      </p>
    </section>
  );
};

export default ContactMe;

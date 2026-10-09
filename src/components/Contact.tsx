import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="about container section">
      <h2 className="about__title">Contact</h2>
      <hr className="about__hr" />

      <div className="contact-card">
        <h3 className="contact-card__title">Let's work together.</h3>
        <p className="contact-card__text">
          I'm open to new Software Engineer and Full-Stack roles. Reach out by email
          or LinkedIn and I'll get back to you.
        </p>
        <div className="contact-card__actions">
          <a href="mailto:godwinv7849@gmail.com">godwinv7849@gmail.com</a>
          <a href="https://www.linkedin.com/in/godwinv7849" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <p className="footer__title">© {new Date().getFullYear()} Godwin V</p>
    </section>
  );
};

export default Contact;

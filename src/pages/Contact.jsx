import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="page-title">Contact</h1>
            <p className="contact-hero-subtitle">
              Get in touch with RL AI Media Group
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-block">
              <p className="contact-label">For general inquiries:</p>
              <a href="mailto:info@rlaimediagroup.com" className="contact-email">
                info@rlaimediagroup.com
              </a>
            </div>
            <div className="contact-divider"></div>
            <div className="contact-block">
              <p className="contact-label">For investor relations:</p>
              <a href="mailto:investors@rlaimediagroup.com" className="contact-email">
                investors@rlaimediagroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact</h1>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-content">
            <p className="contact-label">For general inquiries:</p>
            <a href="mailto:info@rlaimediagroup.com" className="contact-email">
              info@rlaimediagroup.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


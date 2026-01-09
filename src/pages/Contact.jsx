import { motion } from 'framer-motion';
import { Mail, DollarSign } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <main id="main" className="contact-page">
      <section className="contact-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Get in Touch</span>
            <h1 className="page-title">CONTACT</h1>
            <p className="contact-hero-subtitle">
              For general inquiries: <strong>info@rlaimediagroup.com</strong>
            </p>
            <div className="hero-accent-line"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Blocks */}
      <section className="contact-blocks-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>GET IN TOUCH</h2>
            <div className="accent-line" />
          </motion.div>

          <div className="contact-blocks-grid">
            <motion.div
              className="contact-block-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <Mail size={48} className="block-icon" />
              <h3>General Inquiries</h3>
              <a href="mailto:info@rlaimediagroup.com" className="contact-email">
                info@rlaimediagroup.com
              </a>
              <ul className="contact-topics">
                <li>General questions about RL AI Media Group</li>
                <li>Media and press inquiries</li>
                <li>Collaboration and partnership ideas</li>
              </ul>
              <p className="response-time">We typically respond within 2 business days.</p>
            </motion.div>

            <motion.div
              className="contact-block-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <DollarSign size={48} className="block-icon" />
              <h3>Investor Relations</h3>
              <a href="mailto:investors@rlaimediagroup.com" className="contact-email">
                investors@rlaimediagroup.com
              </a>
              <ul className="contact-topics">
                <li>Investor meetings and diligence</li>
                <li>Access to extended materials</li>
                <li>Strategic partnership discussions</li>
              </ul>
              <p className="response-time">We typically respond within 2 business days.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;


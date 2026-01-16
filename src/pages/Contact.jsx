import { motion } from 'framer-motion';
import { Mail, DollarSign } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contacts = [
    {
      title: 'General Inquiries',
      email: 'info@rlaimediagroup.com',
      icon: 'mail',
      topics: [
        'General questions about RL AI Media Group',
        'Media and press inquiries',
        'Collaboration and partnership ideas'
      ]
    },
    {
      title: 'Investor Relations',
      email: 'investors@rlaimediagroup.com',
      icon: 'dollar',
      topics: [
        'Investor meetings and diligence',
        'Access to extended materials',
        'Strategic partnership discussions'
      ]
    }
  ];

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
            {contacts.map((contact, index) => {
              const Icon = contact.icon === 'dollar' ? DollarSign : Mail;
              return (
                <motion.div
                  key={index}
                  className="contact-block-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <Icon size={48} className="block-icon" />
                  <h3>{contact.title}</h3>
                  <a href={`mailto:${contact.email}`} className="contact-email">
                    {contact.email}
                  </a>
                  <ul className="contact-topics">
                    {contact.topics && contact.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                  <p className="response-time">We typically respond within 2 business days.</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;


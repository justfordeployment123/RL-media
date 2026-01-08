import { motion } from 'framer-motion';
import { Zap, Globe, CheckCircle } from 'lucide-react';
import { platforms } from '../data/platforms';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Animated Background */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="hero-title">RL AI Media Group</h1>
            <p className="hero-subtitle">
              AI infrastructure and media platforms focused on identity, culture, and governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="geometric-accent accent-top"></div>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          <div className="accent-line-center"></div>
          
          <div className="what-we-do-content">
            {[
              {
                icon: <Zap size={24} />,
                text: 'RL AI Media Group builds practical AI platforms for organizations working with people, data, and creative systems.'
              },
              {
                icon: <Globe size={24} />,
                text: 'We focus on trust, accountability, and long-term use — not experimentation.'
              },
              {
                icon: <Globe size={24} />,
                text: 'Our companies operate across media, technology, and cultural infrastructure.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="what-we-do-block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(47, 128, 237, 0.08)' }}
              >
                <div className="block-icon">{item.icon}</div>
                <p className="what-we-do-text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="geometric-accent accent-bottom"></div>
      </section>

      {/* Our Platforms Section */}
      <section className="platforms-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Platforms
          </motion.h2>
          <div className="accent-line-center"></div>
          
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                className="platform-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="platform-logo-wrapper">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="platform-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="platform-logo-fallback" style={{ display: 'none' }}>
                    {platform.name}
                  </div>
                </div>
                <h3 className="platform-name">{platform.name}</h3>
                <p className="platform-description">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Target, Telescope, Scale, Shield, Globe, BarChart3, Wrench, Handshake, Clock } from 'lucide-react';
import './About.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/about`);
        if (res.ok) {
          const data = await res.json();
          setAboutData(data);
        }
      } catch (error) {
        console.error('Error fetching about data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
  }

  const mission = aboutData?.mission?.description || 'Build practical AI infrastructure that respects identity, protects culture, and scales with governance at its core.';
  const vision = aboutData?.vision?.description || 'A future where AI systems are accountable to the people and cultures they impact, enabling trust at scale.';
  const values = aboutData?.values?.description || 'Accountability, transparency, cultural respect, and long-term thinking in every platform we build.';
  const whoWeAre = aboutData?.whoWeAre || [];
  const corePrinciples = aboutData?.corePrinciples || [];
  const ourApproach = aboutData?.ourApproach || [];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Our Story</span>
            <h1 className="page-title">ABOUT RL AI MEDIA GROUP</h1>
            <p className="hero-description">
              Building responsible AI infrastructure at the intersection of media, technology, and long-term trust.
            </p>
            <div className="hero-accent-line"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mvv-section">
        <div className="container">
          <div className="mvv-grid">
            <motion.div
              className="mvv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Target size={48} className="mvv-icon" />
              <h3 className="mvv-title">Mission</h3>
              <p className="mvv-text">{mission}</p>
            </motion.div>
            <motion.div
              className="mvv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Telescope size={48} className="mvv-icon" />
              <h3 className="mvv-title">Vision</h3>
              <p className="mvv-text">{vision}</p>
            </motion.div>
            <motion.div
              className="mvv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Scale size={48} className="mvv-icon" />
              <h3 className="mvv-title">Values</h3>
              <p className="mvv-text">{values}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-content-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            WHO WE ARE
          </motion.h2>
          <div className="accent-line-center"></div>
          <div className="about-content">
            {whoWeAre.length > 0 ? whoWeAre.map((point, index) => (
              <motion.div
                key={index}
                className="about-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="block-number">{index + 1}</div>
                <p>{point}</p>
              </motion.div>
            )) : (
              <p>Loading who we are section...</p>
            )}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="principles-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CORE PRINCIPLES
          </motion.h2>
          <div className="accent-line-center"></div>
          <div className="principles-grid">
            {corePrinciples.length > 0 ? corePrinciples.map((principle, index) => {
              const icons = [Shield, Globe, BarChart3, Wrench, Handshake, Clock];
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  className="principle-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="principle-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </motion.div>
              );
            }) : (
              <p>Loading core principles...</p>
            )}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR APPROACH
          </motion.h2>
          <div className="accent-line-center"></div>
          <div className="approach-content">
            {ourApproach.length > 0 ? ourApproach.map((approach, index) => (
              <motion.div
                key={index}
                className="approach-block"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="approach-number">{index + 1}</div>
                <div className="approach-text">
                  <h3>{approach.heading}</h3>
                  <p>{approach.text}</p>
                </div>
              </motion.div>
            )) : (
              <p>Loading our approach...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


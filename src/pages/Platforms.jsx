import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Target, Link2, Scale, CheckCircle } from 'lucide-react';
import { platforms as defaultPlatforms } from '../data/platforms';
import './Platforms.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Platforms = () => {
  const [platforms, setPlatforms] = useState(defaultPlatforms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/platforms`);
        if (res.ok) {
          const data = await res.json();
          setPlatforms(data || defaultPlatforms);
        }
      } catch (error) {
        console.error('Failed to load platforms:', error);
        setPlatforms(defaultPlatforms);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="platforms-page">
      <section className="platforms-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="container">
          <motion.div
            className="platforms-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Platform Ecosystem</span>
            <h1 className="page-title">OUR PLATFORMS</h1>
            <p className="page-subtitle">
              RL AI Media Group operates a portfolio of independent but interoperable platforms.
            </p>
            <p className="page-description">
              Each company addresses a specific infrastructure gap in the AI ecosystem.
            </p>
            <div className="hero-accent-line"></div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Intro */}
      <section className="ecosystem-intro-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            WHY INDEPENDENT PLATFORMS?
          </motion.h2>
          <div className="accent-line-center"></div>
          <div className="ecosystem-grid">
            {[
              {
                icon: <Target size={32} />,
                title: 'Specialized Expertise',
                description: 'Each platform focuses on solving one problem exceptionally well, not spreading thin across multiple domains.'
              },
              {
                icon: <Link2 size={32} />,
                title: 'Interoperable by Design',
                description: 'Platforms work together seamlessly while maintaining autonomy and clear boundaries of responsibility.'
              },
              {
                icon: <Scale size={32} />,
                title: 'Governance First',
                description: 'Every platform is built with accountability, consent, and cultural respect as core architecture principles.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="ecosystem-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="ecosystem-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform List with Expandable Details */}
      <section className="platforms-list-section">
        <div className="container">
          <div className="platforms-list">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                className="platform-item"
                data-platform={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="platform-item-content">
                  <div className="platform-item-logo">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="platform-item-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.nextElementSibling;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="platform-item-fallback" style={{ display: 'none' }}>
                      {platform.name}
                    </div>
                  </div>
                  <div className="platform-item-text">
                    <h2 className="platform-item-name">{platform.name}</h2>
                    <p className="platform-item-description">{platform.detailedDescription}</p>
                  </div>
                </div>

                {index < platforms.length - 1 && <div className="platform-divider" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platforms;


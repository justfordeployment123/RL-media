import { motion } from 'framer-motion';
import { Target, Link2, Scale, CheckCircle } from 'lucide-react';
import { platforms } from '../data/platforms';
import './Platforms.css';

const platformDetails = {
  liqon: {
    useCases: [
      'AI-generated content with verified consent',
      'Digital twin management for entertainers',
      'Likeness protection in synthetic media'
    ],
    features: [
      'Blockchain-verified consent records',
      'Real-time likeness monitoring',
      'Automated rights management',
      'Identity verification protocols',
      'Audit trail for all usage'
    ],
    integration: 'Connects with Framegenix for media production, CultureVault for archival, and Aural-Unity for audio verification.'
  },
  framegenix: {
    useCases: [
      'AI-assisted film and video production',
      'Music composition with rights awareness',
      'Collaborative storytelling tools'
    ],
    features: [
      'Generative media creation tools',
      'Real-time collaboration workspace',
      'Built-in rights tracking',
      'Version control for creative assets',
      'AI-powered editing assistance'
    ],
    integration: 'Integrates with LIQON for identity management, VOYCITY for localization, and Datawrap for asset governance.'
  },
  voycity: {
    useCases: [
      'Real-time multilingual conferences',
      'Content localization at scale',
      'Accessible communication systems'
    ],
    features: [
      'Neural translation engine',
      'Voice cloning with consent',
      'Low-latency processing',
      '100+ language pairs',
      'Cultural context preservation'
    ],
    integration: 'Works with Framegenix for media localization, CultureVault for historical translations, and Aural-Unity for voice verification.'
  },
  culturevault: {
    useCases: [
      'Museum and archive digitization',
      'Indigenous cultural preservation',
      'Historical media restoration'
    ],
    features: [
      'High-fidelity digitization',
      'Metadata enrichment AI',
      'Secure access controls',
      'Cultural sensitivity filters',
      'Long-term preservation protocols'
    ],
    integration: 'Connects with LIQON for rights management, Datawrap for metadata governance, and VOYCITY for multilingual access.'
  },
  datawrap: {
    useCases: [
      'Enterprise AI data preparation',
      'Creative asset organization',
      'Compliance-ready data pipelines'
    ],
    features: [
      'Automated data normalization',
      'Governance rule engine',
      'Lineage tracking',
      'Quality validation',
      'Privacy-preserving transformations'
    ],
    integration: 'Provides data infrastructure for all platforms, ensuring consistent governance and quality across the ecosystem.'
  },
  'aural-unity': {
    useCases: [
      'Audio deepfake detection',
      'Music rights protection',
      'Podcast authentication'
    ],
    features: [
      'Audio fingerprinting',
      'Provenance verification',
      'Watermarking technology',
      'Rights enforcement automation',
      'Tampering detection'
    ],
    integration: 'Works with LIQON for voice consent, VOYCITY for translated audio verification, and Framegenix for media authenticity.'
  }
};

const Platforms = () => {
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
            <h1 className="page-title">Our Platforms</h1>
            <p className="page-subtitle">
              RL AI Media Group operates a portfolio of independent but interoperable platforms.
            </p>
            <p className="page-description">
              Each company addresses a specific infrastructure gap in the AI ecosystem.
            </p>
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
            Why Independent Platforms?
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


import { useState } from 'react';
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
  const [expandedPlatform, setExpandedPlatform] = useState(null);
  const [activeTab, setActiveTab] = useState('useCases');

  const togglePlatform = (platformId) => {
    if (expandedPlatform === platformId) {
      setExpandedPlatform(null);
    } else {
      setExpandedPlatform(platformId);
      setActiveTab('useCases');
    }
  };

  return (
    <div className="platforms-page">
      <section className="platforms-hero">
        <div className="container">
          <div className="platforms-hero-content">
            <h1 className="page-title">Our Platforms</h1>
            <p className="page-subtitle">
              RL AI Media Group operates a portfolio of independent but interoperable platforms.
            </p>
            <p className="page-description">
              Each company addresses a specific infrastructure gap in the AI ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Intro */}
      <section className="ecosystem-intro-section">
        <div className="container">
          <h2 className="section-title">Why Independent Platforms?</h2>
          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <div className="ecosystem-icon">🎯</div>
              <h3>Specialized Expertise</h3>
              <p>Each platform focuses on solving one problem exceptionally well, not spreading thin across multiple domains.</p>
            </div>
            <div className="ecosystem-card">
              <div className="ecosystem-icon">🔗</div>
              <h3>Interoperable by Design</h3>
              <p>Platforms work together seamlessly while maintaining autonomy and clear boundaries of responsibility.</p>
            </div>
            <div className="ecosystem-card">
              <div className="ecosystem-icon">⚖️</div>
              <h3>Governance First</h3>
              <p>Every platform is built with accountability, consent, and cultural respect as core architecture principles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform List with Expandable Details */}
      <section className="platforms-list-section">
        <div className="container">
          <div className="platforms-list">
            {platforms.map((platform, index) => (
              <div key={platform.id} className={`platform-item ${expandedPlatform === platform.id ? 'expanded' : ''}`}>
                <div className="platform-item-content" onClick={() => togglePlatform(platform.id)}>
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
                  <div className="platform-expand-icon">
                    {expandedPlatform === platform.id ? '−' : '+'}
                  </div>
                </div>

                {expandedPlatform === platform.id && platformDetails[platform.id] && (
                  <div className="platform-details">
                    <div className="platform-tabs">
                      <button
                        className={`platform-tab ${activeTab === 'useCases' ? 'active' : ''}`}
                        onClick={() => setActiveTab('useCases')}
                      >
                        Use Cases
                      </button>
                      <button
                        className={`platform-tab ${activeTab === 'features' ? 'active' : ''}`}
                        onClick={() => setActiveTab('features')}
                      >
                        Key Features
                      </button>
                      <button
                        className={`platform-tab ${activeTab === 'integration' ? 'active' : ''}`}
                        onClick={() => setActiveTab('integration')}
                      >
                        Integration
                      </button>
                    </div>

                    <div className="platform-tab-content">
                      {activeTab === 'useCases' && (
                        <ul className="detail-list">
                          {platformDetails[platform.id].useCases.map((useCase, i) => (
                            <li key={i}>{useCase}</li>
                          ))}
                        </ul>
                      )}
                      {activeTab === 'features' && (
                        <ul className="detail-list">
                          {platformDetails[platform.id].features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      )}
                      {activeTab === 'integration' && (
                        <p className="integration-text">{platformDetails[platform.id].integration}</p>
                      )}
                    </div>
                  </div>
                )}

                {index < platforms.length - 1 && <div className="platform-divider" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platforms;


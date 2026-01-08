import { platforms } from '../data/platforms';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Top Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">RL AI Media Group</h1>
            <p className="hero-subtitle">
              AI infrastructure and media platforms focused on identity, culture, and governance.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="what-we-do-content">
            <div className="what-we-do-block">
              <p className="what-we-do-text">
                RL AI Media Group builds practical AI platforms for organizations working with people, data, and creative systems.
              </p>
            </div>
            <div className="what-we-do-block">
              <p className="what-we-do-text">
                We focus on trust, accountability, and long-term use — not experimentation.
              </p>
            </div>
            <div className="what-we-do-block">
              <p className="what-we-do-text">
                Our companies operate across media, technology, and cultural infrastructure.
              </p>
            </div>
          </div>
          <div className="what-we-do-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Trust & Accountability</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Long-term Solutions</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Cultural Infrastructure</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Practical AI Platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Platforms Section */}
      <section className="platforms-section">
        <div className="container">
          <h2 className="section-title">Our Platforms</h2>
          <div className="platforms-grid">
            {platforms.map((platform) => (
              <div key={platform.id} className="platform-card">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


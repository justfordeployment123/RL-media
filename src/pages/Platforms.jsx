import { platforms } from '../data/platforms';
import './Platforms.css';

const Platforms = () => {
  return (
    <div className="platforms-page">
      <section className="platforms-hero">
        <div className="container">
          <h1 className="page-title">Our Platforms</h1>
          <p className="page-subtitle">
            RL AI Media Group operates a portfolio of independent but interoperable platforms.
          </p>
          <p className="page-description">
            Each company addresses a specific infrastructure gap in the AI ecosystem.
          </p>
        </div>
      </section>

      <section className="platforms-list-section">
        <div className="container">
          <div className="platforms-list">
            {platforms.map((platform, index) => (
              <div key={platform.id} className="platform-item">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platforms;


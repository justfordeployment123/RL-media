import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">About RL AI Media Group</h1>
            <p className="hero-description">
              Building responsible AI infrastructure at the intersection of media, technology, and long-term trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mvv-section">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">🎯</div>
              <h3 className="mvv-title">Mission</h3>
              <p className="mvv-text">
                Build practical AI infrastructure that respects identity, protects culture, and scales with governance at its core.
              </p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">🔭</div>
              <h3 className="mvv-title">Vision</h3>
              <p className="mvv-text">
                A future where AI systems are accountable to the people and cultures they impact, enabling trust at scale.
              </p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">⚖️</div>
              <h3 className="mvv-title">Values</h3>
              <p className="mvv-text">
                Accountability, transparency, cultural respect, and long-term thinking in every platform we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-content-section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="about-content">
            <div className="about-block">
              <p className="about-text">
                RL AI Media Group is a holding company focused on building responsible AI infrastructure.
              </p>
            </div>
            <div className="about-block">
              <p className="about-text">
                We design systems that respect identity, protect culture, and scale with governance in mind.
              </p>
            </div>
            <div className="about-block">
              <p className="about-text">
                Our work sits at the intersection of media, technology, and long-term trust.
              </p>
            </div>
            <div className="about-block">
              <p className="about-text">
                We believe AI systems must be accountable to the people and cultures they impact.
              </p>
            </div>
            <div className="about-block">
              <p className="about-text">
                RL AI Media Group operates independently and partners selectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="principles-section">
        <div className="container">
          <h2 className="section-title">Core Principles</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">🔐</div>
              <h3 className="principle-title">Trust & Consent</h3>
              <p className="principle-text">
                Every system we build prioritizes user consent, data ownership, and transparent operations. No shortcuts.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">🌍</div>
              <h3 className="principle-title">Cultural Respect</h3>
              <p className="principle-text">
                We design with cultural sensitivity, ensuring AI respects heritage, identity, and diverse perspectives.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">📊</div>
              <h3 className="principle-title">Accountability</h3>
              <p className="principle-text">
                Clear audit trails, explainable decisions, and measurable impact. We take responsibility for our systems.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">🛠️</div>
              <h3 className="principle-title">Practical Focus</h3>
              <p className="principle-text">
                We solve real problems for real organizations. No experiments, no hype—just infrastructure that works.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">🤝</div>
              <h3 className="principle-title">Selective Partnerships</h3>
              <p className="principle-text">
                We work with organizations that share our values and commitment to responsible AI deployment.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">⏳</div>
              <h3 className="principle-title">Long-Term Thinking</h3>
              <p className="principle-text">
                Built for sustained adoption, not quarterly cycles. Our platforms are designed to last decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach-section">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="approach-content">
            <div className="approach-block">
              <h3 className="approach-heading">Why Independent Platforms?</h3>
              <p className="approach-text">
                Each company in our portfolio operates independently with specialized expertise. This prevents the "one-size-fits-all" problem common in AI infrastructure, allowing each platform to excel in its domain while maintaining interoperability through shared governance principles.
              </p>
            </div>
            <div className="approach-block">
              <h3 className="approach-heading">Selective Partnership Philosophy</h3>
              <p className="approach-text">
                We partner with organizations that value long-term sustainability over rapid deployment, cultural respect over convenience, and accountability over opacity. Our platforms are not for everyone—they're for those who believe AI should serve people and culture responsibly.
              </p>
            </div>
            <div className="approach-block">
              <h3 className="approach-heading">Governance by Design</h3>
              <p className="approach-text">
                Governance isn't an afterthought—it's embedded in the architecture. Every platform includes consent management, audit trails, and explainability as core features, not optional add-ons. This makes compliance easier and trust scalable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">About RL AI Media Group</h1>
          </div>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
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
    </div>
  );
};

export default About;


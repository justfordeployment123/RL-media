import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About RL AI Media Group</h1>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-content">
            <p className="about-text">
              RL AI Media Group is a holding company focused on building responsible AI infrastructure.
            </p>
            <p className="about-text">
              We design systems that respect identity, protect culture, and scale with governance in mind.
            </p>
            <p className="about-text">
              Our work sits at the intersection of media, technology, and long-term trust.
            </p>
            <p className="about-text">
              We believe AI systems must be accountable to the people and cultures they impact.
            </p>
            <p className="about-text">
              RL AI Media Group operates independently and partners selectively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


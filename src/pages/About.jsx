import { motion } from 'framer-motion';
import { Target, Telescope, Scale, Shield, Globe, BarChart3, Wrench, Handshake, Clock } from 'lucide-react';
import './About.css';

const About = () => {
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
              <p className="mvv-text">
                Build practical AI infrastructure that respects identity, protects culture, and scales with governance at its core.
              </p>
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
              <p className="mvv-text">
                A future where AI systems are accountable to the people and cultures they impact, enabling trust at scale.
              </p>
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
              <p className="mvv-text">
                Accountability, transparency, cultural respect, and long-term thinking in every platform we build.
              </p>
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
            {[
              'RL AI Media Group is a holding company focused on building responsible AI infrastructure.',
              'We design systems that respect identity, protect culture, and scale with governance in mind.',
              'Our work sits at the intersection of media, technology, and long-term trust.',
              'We believe AI systems must be accountable to the people and cultures they impact.',
              'RL AI Media Group operates independently and partners selectively.'
            ].map((text, index) => (
              <motion.div
                key={index}
                className="about-block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="about-text">{text}</p>
              </motion.div>
            ))}
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
            {[
              { icon: <Shield size={40} />, title: 'Trust & Consent', text: 'Every system we build prioritizes user consent, data ownership, and transparent operations. No shortcuts.' },
              { icon: <Globe size={40} />, title: 'Cultural Respect', text: 'We design with cultural sensitivity, ensuring AI respects heritage, identity, and diverse perspectives.' },
              { icon: <BarChart3 size={40} />, title: 'Accountability', text: 'Clear audit trails, explainable decisions, and measurable impact. We take responsibility for our systems.' },
              { icon: <Wrench size={40} />, title: 'Practical Focus', text: 'We solve real problems for real organizations. No experiments, no hype—just infrastructure that works.' },
              { icon: <Handshake size={40} />, title: 'Selective Partnerships', text: 'We work with organizations that share our values and commitment to responsible AI deployment.' },
              { icon: <Clock size={40} />, title: 'Long-Term Thinking', text: 'Built for sustained adoption, not quarterly cycles. Our platforms are designed to last decades.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="principle-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="principle-icon">{item.icon}</div>
                <h3 className="principle-title">{item.title}</h3>
                <p className="principle-text">{item.text}</p>
              </motion.div>
            ))}
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
            Our Approach
          </motion.h2>
          <div className="accent-line-center"></div>
          <div className="approach-content">
            {[
              {
                heading: 'Why Independent Platforms?',
                text: 'Each company in our portfolio operates independently with specialized expertise. This prevents the "one-size-fits-all" problem common in AI infrastructure, allowing each platform to excel in its domain while maintaining interoperability through shared governance principles.'
              },
              {
                heading: 'Selective Partnership Philosophy',
                text: 'We partner with organizations that value long-term sustainability over rapid deployment, cultural respect over convenience, and accountability over opacity. Our platforms are not for everyone—they\'re for those who believe AI should serve people and culture responsibly.'
              },
              {
                heading: 'Governance by Design',
                text: 'Governance isn\'t an afterthought—it\'s embedded in the architecture. Every platform includes consent management, audit trails, and explainability as core features, not optional add-ons. This makes compliance easier and trust scalable.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="approach-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="approach-heading">{item.heading}</h3>
                <p className="approach-text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


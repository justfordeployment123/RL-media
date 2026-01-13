import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Zap, Globe, CheckCircle } from 'lucide-react';
import { platforms as defaultPlatforms } from '../data/platforms';
import './Home.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [platformsList, setPlatformsList] = useState(defaultPlatforms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch home page data
        const homeRes = await fetch(`${API_URL}/home`);
        if (homeRes.ok) {
          const data = await homeRes.json();
          setHomeData(data);
        }
      } catch (error) {
        console.error('Error fetching home data:', error);
      }

      try {
        // Fetch platforms
        const platformRes = await fetch(`${API_URL}/platforms`);
        if (platformRes.ok) {
          const data = await platformRes.json();
          setPlatformsList(data || defaultPlatforms);
        }
      } catch (error) {
        console.error('Error fetching platforms:', error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
  }
  const heroBadge = homeData?.heroBadge || 'AI Infrastructure & Media';
  const heroTitle = homeData?.heroTitle || 'RL AI MEDIA GROUP';
  const heroSubtitle = homeData?.heroSubtitle || 'AI infrastructure and media platforms focused on identity, culture, and governance.';
  const whatWeDo = homeData?.whatWeDo || [];
  const platforms = platformsList;

  return (
    <div className="home-page">
      {/* Hero Section with Animated Background */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="hero-badge">{heroBadge}</span>
            <h1 className="hero-title">{heroTitle}</h1>
            <p className="hero-subtitle">
              {heroSubtitle}
            </p>
            <div className="hero-accent-line"></div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="geometric-accent accent-top"></div>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            WHAT WE DO
          </motion.h2>
          <div className="accent-line-center"></div>
          
          <div className="what-we-do-content">
            {whatWeDo.map((item, index) => {
              const IconComponent = item.icon === 'Zap' ? Zap : Globe;
              return (
                <motion.div
                  key={index}
                  className="what-we-do-block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(47, 128, 237, 0.08)' }}
                >
                  <div className="block-icon"><IconComponent size={24} /></div>
                  <p className="what-we-do-text">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="geometric-accent accent-bottom"></div>
      </section>

      {/* Our Platforms Section */}
      <section className="platforms-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR PLATFORMS
          </motion.h2>
          <div className="accent-line-center"></div>
          
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id || index}
                className="platform-card"
                data-platform={platform.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


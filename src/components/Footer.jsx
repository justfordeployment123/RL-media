import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">
            © RL AI Media Group
          </p>
          <p className="footer-rights">All rights reserved.</p>
          <div className="footer-links">
            <Link to="/contact">Contact</Link>
            <span className="separator">·</span>
            <Link to="/investor-portal">Investor Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


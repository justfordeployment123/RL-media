import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <section className="not-found-section">
        <div className="container">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Page Not Found</h2>
            <p className="not-found-text">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="not-found-button">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;


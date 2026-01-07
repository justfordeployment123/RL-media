import { useState, useEffect } from 'react';
import { platforms } from '../data/platforms';
import './InvestorPortal.css';

const InvestorPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Check if already authenticated (stored in sessionStorage)
  useEffect(() => {
    const authStatus = sessionStorage.getItem('investorAuth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    setTimeout(() => {
      // Default password
      const correctPassword = 'investor';
      
      if (password === correctPassword) {
        setIsAuthenticated(true);
        sessionStorage.setItem('investorAuth', 'authenticated');
        setPassword('');
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('investorAuth');
    setPassword('');
    setError('');
  };

  if (!isAuthenticated) {
    return (
      <div className="investor-portal-page">
        <section className="investor-login-section">
          <div className="container">
            <div className="login-container">
              <h1 className="login-title">Investor Portal</h1>
              <p className="login-subtitle">
                This portal provides access to confidential materials for RL AI Media Group and its operating companies.
              </p>
              <div className="confidential-notice">
                <p>Confidential Notice</p>
                <p>Materials are proprietary and intended for qualified investors only.</p>
              </div>
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    className={`form-input ${error ? 'error' : ''}`}
                    placeholder="Password"
                    required
                    autoFocus
                    disabled={isLoading}
                  />
                  {error && <p className="error-message">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="login-button"
                  disabled={isLoading || !password.trim()}
                >
                  {isLoading ? 'Verifying...' : 'Access Portal'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="investor-portal-page">
      <section className="investor-hero">
        <div className="container">
          <div className="investor-header">
            <h1 className="page-title">Investor Portal</h1>
            <p className="page-subtitle">
              Select a platform below to view business plans and related documents.
            </p>
            <button onClick={handleLogout} className="logout-button" aria-label="Logout">
              Logout
            </button>
          </div>
        </div>
      </section>

      <section className="investor-grid-section">
        <div className="container">
          <div className="investor-grid">
            {platforms.map((platform) => (
              <div key={platform.id} className="investor-card">
                <div className="investor-card-logo">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="investor-logo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="investor-logo-fallback" style={{ display: 'none' }}>
                    {platform.name}
                  </div>
                </div>
                <h2 className="investor-card-name">{platform.name}</h2>
                <p className="investor-card-description">
                  View business plan, pitch deck, and financials.
                </p>
                <a
                  href={platform.dropboxLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="investor-card-button"
                  onClick={(e) => {
                    if (platform.dropboxLink === '#') {
                      e.preventDefault();
                      alert('Dropbox link will be configured for ' + platform.name);
                    }
                  }}
                >
                  View Materials →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="investor-support">
        <div className="container">
          <p className="support-text">
            For access issues or requests: <a href="mailto:investors@rlaimediagroup.com">investors@rlaimediagroup.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default InvestorPortal;


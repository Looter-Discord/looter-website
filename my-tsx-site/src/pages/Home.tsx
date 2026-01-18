import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import './Home.css';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAddBot = () => {
    window.open('https://discord.gg/vSFMvftfqT', '_blank');
  };

  return (
    <div className="home-container">
      <div className="background-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <span className="brand-name">Looter</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <button className="add-bot-btn" onClick={handleAddBot}>
              Add Bot
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-content">
            <div className="logo-hero">
              <img src={logo} alt="Logo" className="hero-logo" />
            </div>
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">Looter</span>
            </h1>
            <p className="hero-description">
              The ultimate Discord bot experience. Powerful, fast, and easy to use.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={handleAddBot}>
                Add Bot to Discord
              </button>
              <button className="secondary-btn">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <section id="features" className={`features-section ${isVisible ? 'slide-up' : ''}`}>
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Optimized for speed and performance
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure</h3>
              <p className="feature-description">
                Your data is safe with enterprise-grade security
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Customizable</h3>
              <p className="feature-description">
                Tailor the bot to your server's needs
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Easy Setup</h3>
              <p className="feature-description">
                Get started in minutes, not hours
              </p>
            </div>
          </div>
        </section>

        <section id="about" className={`about-section ${isVisible ? 'slide-up' : ''}`}>
          <h2 className="section-title">About</h2>
          <p className="about-text">
            Looter is a modern Discord bot designed to enhance your server experience.
            Built with cutting-edge technology and a focus on user experience.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Looter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
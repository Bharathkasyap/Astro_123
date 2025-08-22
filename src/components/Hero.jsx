import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Discover Your <span className="gradient-text">Cosmic Destiny</span>
            </h1>
            <p className="hero-description">
              Unlock the mysteries of the universe with personalized astrology readings, 
              birth chart analysis, and spiritual guidance tailored just for you.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Get Your Reading
              </button>
              <button className="btn btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="celestial-circle">
              <div className="star">⭐</div>
              <div className="moon">🌙</div>
              <div className="sun">☀️</div>
              <div className="planet">🪐</div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <h3>10K+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Readings Done</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

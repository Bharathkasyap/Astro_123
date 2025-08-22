import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Astro123</h2>
            <p className="section-description">
              Welcome to Astro123, where ancient wisdom meets modern insights. 
              For over 15 years, we've been guiding souls on their cosmic journey 
              through the profound art of astrology.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🌌</div>
                <h3>Authentic Readings</h3>
                <p>Traditional astrological methods combined with intuitive insights for accurate predictions.</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🕰️</div>
                <h3>15+ Years Experience</h3>
                <p>Decades of studying celestial patterns and helping people navigate life's challenges.</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">✨</div>
                <h3>Personalized Approach</h3>
                <p>Every reading is tailored specifically to your unique birth chart and life circumstances.</p>
              </div>
            </div>
            
            <div className="testimonial">
              <blockquote>
                "Astro123 provided me with incredible insights that helped me make important life decisions. 
                The accuracy and depth of the reading was remarkable."
              </blockquote>
              <cite>- Sarah M., Happy Client</cite>
            </div>
          </div>
          
          <div className="about-image">
            <div className="mystical-elements">
              <div className="element sun">☀️</div>
              <div className="element moon">🌙</div>
              <div className="element stars">✨</div>
              <div className="element crystal">🔮</div>
              <div className="element planet">🪐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get Your Reading</h2>
          <p className="section-description">
            Ready to discover your cosmic destiny? Fill out the form below and we'll get back to you with your personalized astrology reading.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="birthDate">Birth Date</label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="birthTime">Birth Time</label>
                  <input
                    type="time"
                    id="birthTime"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleChange}
                    placeholder="If known"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="birthPlace">Birth Place</label>
                <input
                  type="text"
                  id="birthPlace"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  required
                  placeholder="City, State/Province, Country"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">What would you like to know?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about any specific questions or areas of life you'd like to explore..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Request Reading ✨
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>astro123@example.com</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕰️</div>
              <h3>Response Time</h3>
              <p>Within 24 hours</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🌍</div>
              <h3>Available Worldwide</h3>
              <p>Online consultations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

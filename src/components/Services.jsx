import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🔮',
      title: 'Birth Chart Reading',
      description: 'Comprehensive analysis of your natal chart revealing your personality, strengths, and life purpose.',
      price: '$99',
      features: [
        'Complete birth chart analysis',
        'Planetary positions & aspects',
        'Houses interpretation',
        'Written report (20+ pages)'
      ]
    },
    {
      icon: '🌙',
      title: 'Love & Relationships',
      description: 'Discover your romantic compatibility and understand your relationship patterns.',
      price: '$79',
      features: [
        'Synastry chart comparison',
        'Compatibility analysis',
        'Relationship timing',
        'Love advice & guidance'
      ]
    },
    {
      icon: '✨',
      title: 'Career Guidance',
      description: 'Unlock your professional potential and find your ideal career path.',
      price: '$89',
      features: [
        'Career indicators in chart',
        'Best timing for changes',
        'Natural talents & skills',
        'Success strategies'
      ]
    },
    {
      icon: '🔮',
      title: 'Future Predictions',
      description: 'Get insights into upcoming opportunities and challenges in your life.',
      price: '$149',
      features: [
        'Transit analysis',
        'Major life events timing',
        '12-month forecast',
        'Monthly guidance'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Choose from our range of personalized astrology services designed to guide you on your spiritual journey.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>✓ {feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary service-btn">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

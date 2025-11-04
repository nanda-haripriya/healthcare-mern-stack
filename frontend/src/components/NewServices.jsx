import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Services.css';

const NewServices = () => {
  const services = [
    {
      id: 1,
      icon: '🏥',
      title: 'Emergency Care',
      description: '24/7 emergency medical services with highly trained staff and state-of-the-art equipment.',
      features: ['24/7 Availability', 'Ambulance Service', 'ICU Facilities']
    },
    {
      id: 2,
      icon: '🔬',
      title: 'Laboratory Services',
      description: 'Comprehensive diagnostic services with accurate results and quick turnaround time.',
      features: ['Blood Tests', 'Radiology', 'Pathology']
    },
    {
      id: 3,
      icon: '💊',
      title: 'Pharmacy',
      description: 'In-house pharmacy with a wide range of medications and healthcare products.',
      features: ['Prescription Drugs', 'OTC Medicines', 'Home Delivery']
    },
    {
      id: 4,
      icon: '🩺',
      title: 'General Checkup',
      description: 'Comprehensive health checkups and preventive care packages.',
      features: ['Full Body Checkup', 'Health Screening', 'Consultation']
    },
    {
      id: 5,
      icon: '🦷',
      title: 'Dental Care',
      description: 'Complete dental services from routine checkups to advanced procedures.',
      features: ['Teeth Cleaning', 'Root Canal', 'Orthodontics']
    },
    {
      id: 6,
      icon: '👁️',
      title: 'Eye Care',
      description: 'Comprehensive eye care services including vision tests and surgeries.',
      features: ['Eye Examination', 'Cataract Surgery', 'Laser Treatment']
    },
    {
      id: 7,
      icon: '🤰',
      title: 'Maternity Care',
      description: 'Complete maternity services with experienced obstetricians and modern facilities.',
      features: ['Prenatal Care', 'Delivery Services', 'Postnatal Care']
    },
    {
      id: 8,
      icon: '💉',
      title: 'Vaccination',
      description: 'Immunization services for children and adults with all vaccines available.',
      features: ['Child Vaccination', 'Adult Vaccination', 'Travel Vaccination']
    },
    {
      id: 9,
      icon: '🧘',
      title: 'Physiotherapy',
      description: 'Rehabilitation and physiotherapy services for injury recovery and pain management.',
      features: ['Pain Management', 'Sports Injury', 'Rehabilitation']
    }
  ];

  return (
    <div className="services-page">
      <Navbar />
      
      <div className="services-container">
        <div className="services-hero">
          <h1>Our Medical Services</h1>
          <p>Comprehensive healthcare services delivered with care and expertise</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/doctors" className="btn-service-book">
                Book Appointment
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-section">
          <h2>Why Choose Our Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">👨‍⚕️</span>
              <h4>Expert Doctors</h4>
              <p>Highly qualified and experienced medical professionals</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🏥</span>
              <h4>Modern Facilities</h4>
              <p>State-of-the-art equipment and comfortable environment</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💰</span>
              <h4>Affordable Pricing</h4>
              <p>Quality healthcare at competitive prices</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⏰</span>
              <h4>24/7 Support</h4>
              <p>Round-the-clock medical assistance and emergency care</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <h2>Need Medical Assistance?</h2>
          <p>Book an appointment with our specialists today</p>
          <Link to="/doctors" className="btn-cta-large">
            Find a Doctor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewServices;

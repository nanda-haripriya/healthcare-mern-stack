import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Home.css';

const NewHome = () => {
  return (
    <div className="home-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Health, Our Priority</h1>
          <p className="hero-subtitle">
            Book appointments with top doctors instantly. Quality healthcare at your fingertips.
          </p>
          <div className="hero-buttons">
            <Link to="/doctors" className="btn-hero-primary">Find a Doctor</Link>
            <Link to="/signup" className="btn-hero-secondary">Get Started</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <span className="card-icon">👨‍⚕️</span>
            <p>500+ Doctors</p>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">⏰</span>
            <p>24/7 Available</p>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">⭐</span>
            <p>5-Star Rated</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Find Specialists</h3>
            <p>Search and book appointments with top specialists in various medical fields.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Easy Booking</h3>
            <p>Book appointments online with just a few clicks. No more waiting in queues.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💊</div>
            <h3>Quality Care</h3>
            <p>Get access to experienced doctors and quality healthcare services.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Reminders</h3>
            <p>Receive timely reminders for your appointments and follow-ups.</p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section">
        <h2 className="section-title">Our Specialties</h2>
        <div className="specialties-grid">
          <div className="specialty-card">
            <span className="specialty-icon">❤️</span>
            <h4>Cardiology</h4>
          </div>
          <div className="specialty-card">
            <span className="specialty-icon">🦴</span>
            <h4>Orthopedics</h4>
          </div>
          <div className="specialty-card">
            <span className="specialty-icon">🧠</span>
            <h4>Neurology</h4>
          </div>
          <div className="specialty-card">
            <span className="specialty-icon">👁️</span>
            <h4>Ophthalmology</h4>
          </div>
          <div className="specialty-card">
            <span className="specialty-icon">🦷</span>
            <h4>Dentistry</h4>
          </div>
          <div className="specialty-card">
            <span className="specialty-icon">👶</span>
            <h4>Pediatrics</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied patients who trust us with their healthcare needs.</p>
          <Link to="/signup" className="btn-cta">Book Your Appointment</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>HealthCare+</h4>
            <p>Your trusted healthcare partner</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/doctors">Find Doctors</Link>
            <Link to="/appointments">My Appointments</Link>
            <Link to="/services">Services</Link>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 contact@healthcare.com</p>
            <p>📞 +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 HealthCare+. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewHome;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">⚕️</span>
          <span className="logo-text">HealthCare+</span>
        </Link>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/doctors" className="nav-link" onClick={() => setMenuOpen(false)}>Doctors</Link>
          <Link to="/appointments" className="nav-link" onClick={() => setMenuOpen(false)}>Appointments</Link>
          <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
          
          {user ? (
            <div className="nav-user">
              <span className="user-name">👤 {user.fullName || user.email}</span>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </div>
          ) : (
            <div className="nav-auth">
              <Link to="/login" className="btn-login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="btn-signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </div>
          )}
        </div>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Inline CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body, html, .home {
          height: 100%;
          font-family: Arial, sans-serif;
        }

        /* Navbar styling */
        .navbar {
          background: rgba(33, 150, 243, 0.8); /* semi-transparent */
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
        }

        .navbar .logo {
          color: white;
          font-size: 22px;
          font-weight: bold;
        }

        .navbar ul {
          list-style: none;
          display: flex;
          gap: 25px;
        }

        .navbar ul li a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
        }

        .navbar ul li a:hover {
          text-decoration: underline;
        }

        /* Fullscreen hero background */
        .hero {
          height: 80vh;
          width: 200vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          background-image: url('https://png.pngtree.com/background/20210710/original/pngtree-medical-doctor-science-background-picture-image_968711.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* Dark overlay for readability */
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        /* Hero content styling */
        .hero-content {
          position: relative;
          z-index: 2;
          background: rgba(33, 150, 243, 0.7);
          padding: 25px 50px;
          border-radius: 10px;
        }

        .hero-content h1 {
          font-size: 36px;
          color: white;
          font-weight: bold;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            padding: 15px 20px;
          }

          .navbar ul {
            flex-direction: column;
            gap: 15px;
            margin-top: 10px;
          }

          .hero-content {
            padding: 20px 30px;
          }

          .hero-content h1 {
            font-size: 28px;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">City Hospital</div>
        <ul>
          <li><Link to="/patients">Patients Register</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to City Hospital</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

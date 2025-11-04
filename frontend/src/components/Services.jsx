import React, { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const servicesList = [
    "General Checkup",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "Radiology",
    "Emergency Services",
    "Laboratory Tests",
    "Physiotherapy"
  ];

  const handleChange = (e) => {
    setRequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!requestData.name || !requestData.email || !requestData.service || !requestData.message) {
      alert("Please fill all fields");
      return;
    }
    alert("Service request submitted successfully!");
    setRequestData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className="services-page">
      <style>{`
        body, html, .services-page {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: #f0f8ff;
          min-height: 100vh;
        }
        .navbar {
          background: #007bff;
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar .logo {
          color: white;
          font-size: 20px;
          font-weight: bold;
        }
        .navbar ul {
          list-style: none;
          display: flex;
          gap: 100px;
        }
        .navbar ul li a {
          color: white;
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 5px;
          font-size: 15px;
        }
        .navbar ul li a:hover,
        .navbar ul li a.active {
          background: #0056b3;
        }
        .back-button {
          margin: 20px;
          text-align: center;
        }
        .back-button a {
          background: #007bff;
          color: white;
          padding: 8px 14px;
          border-radius: 6px;
          text-decoration: none;
        }
        .back-button a:hover {
          background: #0056b3;
        }
        .page-title {
          text-align: center;
          font-size: 32px;
          color: #007bff;
          margin: 20px 0;
        }
        .services-list {
          max-width: 800px;
          margin: 0 auto 40px auto;
          padding: 20px;
          background: gray;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }
        .services-list h3 {
          text-align: center;
          margin-bottom: 20px;
          color:rgb(6, 6, 6);
        }
        .services-list ul {
          list-style: disc;
          padding-left: 40px;
          font-size: 18px;
        }
        .service-form {
          max-width: 700px;
          margin: 0 auto 50px auto;
          padding: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }
        .service-form form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .service-form input,
        .service-form select,
        .service-form textarea {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 16px;
        }
        .service-form textarea {
          resize: vertical;
          min-height: 100px;
        }
        .service-form button {
          padding: 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
        .service-form button:hover {
          background: #0056b3;
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🏥 City Hospital</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/services" className="active">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Back to Home */}
      <div className="back-button">
        <Link to="/">← Back to Home</Link>
      </div>

      <h2 className="page-title">Our Services</h2>

      <div className="services-list">
        <h3>Hospital Services</h3>
        <ul>
          {servicesList.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>

      <div className="service-form">
        <h3>Request a Service</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={requestData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={requestData.email}
            onChange={handleChange}
          />
          <select
            name="service"
            value={requestData.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            {servicesList.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Additional Details"
            value={requestData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Services;

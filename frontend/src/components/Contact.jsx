import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all fields.");
      return;
    }
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body, html, .contact-page {
          font-family: Arial, sans-serif;
          background: #e6f2ff;
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
          color: #007bff;
          font-size: 32px;
          margin: 20px 0;
        }
        .contact-form-container {
          max-width: 700px;
          margin: 0 auto 50px auto;
          padding: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }
        .contact-form-container form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .contact-form-container input,
        .contact-form-container textarea {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 16px;
        }
        .contact-form-container textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-form-container button {
          padding: 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
        .contact-form-container button:hover {
          background: #0056b3;
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🏥 City Hospital</div>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact" className="active">Contact</Link></li>
        </ul>
      </nav>

      <div className="back-button">
        <Link to="/">← Back to Home</Link>
      </div>

      <h2 className="page-title">Contact Us</h2>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

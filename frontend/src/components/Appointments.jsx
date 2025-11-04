import React, { useState } from "react";
import { Link } from "react-router-dom";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    appointmentID: "",
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.appointmentID ||
      !formData.patientName ||
      !formData.doctorName ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all fields!");
      return;
    }
    setAppointments([...appointments, formData]);
    setFormData({
      appointmentID: "",
      patientName: "",
      doctorName: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="appointments-page">
      {/* Inline CSS */}
      <style>{`
        .appointments-page {
          font-family: Arial, sans-serif;
          background: #f8f9fa;
          min-height: 100vh;
        }
        .navbar {
          background: #222;
          padding: 12px;
        }
        .navbar ul {
          list-style: none;
          display: flex;
          justify-content: center;
          margin: 0;
          padding: 0;
        }
        .navbar ul li {
          margin: 0 15px;
        }
        .navbar ul li a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
        .navbar ul li a:hover,
        .navbar ul li a.active {
          text-decoration: underline;
        }

        header {
          background: #2196f3;
          padding: 20px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .back-btn {
          background: #007bff;
          color: white;
          padding: 8px 14px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 14px;
        }
        .back-btn:hover {
          background: #0056b3;
        }

        .form-container {
          background: white;
          max-width: 1200px;
          margin: 20px auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.94);
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .form-container input {
          flex: 1;
          min-width: 180px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
        }
        .form-container button {
          background: #28a745;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }
        .form-container button:hover {
          background: #218838;
        }

        table {
          width: 95%;
          margin: 20px auto;
          border-collapse: collapse;
          background: white;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.9);
        }
        table th, table td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: center;
        }
        table th {
          background: #007bff;
          color: white;
        }
        table tr:nth-child() {
          background:rgb(16, 16, 16);
        }
        table tr:hover {
          background:rgb(16, 16, 16);
        }
        
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/patients">🧑‍🤝‍🧑 Patients</Link></li>
          <li><Link to="/appointments" className="active">📅 Appointments</Link></li>
          <li><Link to="/doctors">👨‍⚕️ Doctors</Link></li>
        </ul>
      </nav>

      {/* Page Header */}
      <header>
        <h1>Manage Appointments</h1>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </header>

      {/* Form */}
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="appointmentID"
          placeholder="Appointment ID"
          value={formData.appointmentID}
          onChange={handleChange}
        />
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={formData.doctorName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <button type="submit">Add Appointment</button>
      </form>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt, index) => (
            <tr key={index}>
              <td>{appt.appointmentID}</td>
              <td>{appt.patientName}</td>
              <td>{appt.doctorName}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;

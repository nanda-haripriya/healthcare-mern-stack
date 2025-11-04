import React from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div className="doctors">
      {/* Inline CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body, html, .doctors {
          font-family: Arial, sans-serif;
          background: rgb(135, 214, 236);
          padding: 0;
          margin: 0;
          height: 100%;
        }

        .navbar {
          background: #0066a1;
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
          gap: 20px;
        }

        .navbar ul li a {
          color: white;
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 5px;
          font-size: 15px;
          transition: 0.3s;
        }

        .navbar ul li a:hover,
        .navbar ul li a.active {
          background: #004f7a;
        }

        .back-button {
          margin: 20px;
          text-align: center;
        }

        .back-button a {
          background: #007bff;
          color: white;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 6px;
          font-size: 14px;
          transition: background 0.3s;
        }

        .back-button a:hover {
          background: #0056b3;
        }

        .title {
          text-align: center;
          margin: 10px 0 20px;
          color: #0066a1;
        }

        .doctor-table {
          width: 150vh;
          margin: 0 auto;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          box-shadow: 0px 2px 6px rgba(8, 8, 8, 0.91);
          overflow: hidden;
        }

        .doctor-table th {
          background: #0066a1;
          color: white;
          padding: 12px;
          text-align: left;
        }

        .doctor-table td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }

        /* Remove hover effect */
        .doctor-table tr:nth-child(even) {
          background:rgb(16, 16, 17);
        }

        .doctor-table tr:nth-child(odd) {
          background: black;
        }

      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🏥 Hospital Management</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/doctors" className="active">Doctors</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
        </ul>
      </nav>

      {/* Back to Home */}
      <div className="back-button">
        <Link to="/">← Back to Home</Link>
      </div>

      {/* Title */}
      <h2 className="title">Doctors List</h2>

      {/* Doctors Table */}
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>D101</td>
            <td>Dr. Sarah Johnson</td>
            <td>Cardiologist</td>
            <td>MBBS, MD (Cardiology)</td>
          </tr>
          <tr>
            <td>D102</td>
            <td>Dr. Amit Kumar</td>
            <td>Neurologist</td>
            <td>MBBS, DM (Neurology)</td>
          </tr>
          <tr>
            <td>D103</td>
            <td>Dr. Emily Carter</td>
            <td>Pediatrician</td>
            <td>MBBS, MD (Pediatrics)</td>
          </tr>
          <tr>
            <td>D104</td>
            <td>Dr. Rajesh Singh</td>
            <td>Orthopedic Surgeon</td>
            <td>MBBS, MS (Orthopedics)</td>
          </tr>
          <tr>
            <td>D105</td>
            <td>Dr. Lisa Wong</td>
            <td>Dermatologist</td>
            <td>MBBS, MD (Dermatology)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;

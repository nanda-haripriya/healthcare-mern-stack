import React, { useState } from "react";
import { Link } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.dob || !formData.gender) {
      alert("Please fill all fields");
      return;
    }
    const newPatient = { id: patients.length + 1, ...formData };
    setPatients([...patients, newPatient]);
    setFormData({ name: "", age: "", dob: "", gender: "" });
  };

  return (
    <div className="patients-page">
      {/* Inline CSS */}
      <style>{`
        body, html, .patients-page {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background:rgb(154, 215, 250);
          min-height: 200vh;
        }

        .back-home {
          text-align: center;
          margin: 20px 0;
        }

        .back-btn {
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }

        .back-btn:hover {
          background: #0056b3;
        }

        .page-title {
          text-align: center;
          color: #007bff;
          font-size: 32px;
          margin-bottom: 20px;
        }

        .form-container {
          background: white;
          padding: 30px 40px;
          border-radius: 12px;
          max-width: 900px;
          margin: 0 auto 40px auto;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }

        .form-container h3 {
          margin-bottom: 20px;
          color: #333;
        }

        .patient-form {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .patient-form input,
        .patient-form select {
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
          flex: 1 1 180px;
        }

        .patient-form button {
          padding: 12px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .patient-form button:hover {
          background: #0056b3;
        }

        .patients-table {
          width: 90%;
          max-width: 900px;
          margin: 0 auto 50px auto;
          border-collapse: collapse;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px #4489e9
          background: white;
        }

        .patients-table th,
        .patients-table td {
          padding: 14px 12px;
          text-align: center;
          border-bottom: 1px solid #ddd;
        }

        .patients-table th {
          background: #007bff;
          color: white;
          font-size: 16px;
        }

        

        @media (max-width: 768px) {
          .patient-form {
            flex-direction: column;
          }

          .patients-table th,
          .patients-table td {
            font-size: 14px;
            padding: 10px 8px;
          }
        }
      `}</style>

      <div className="back-home">
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>

      <h2 className="page-title">Patients List</h2>

      <div className="form-container">
        <h3>Add New Patient</h3>
        <form onSubmit={handleSubmit} className="patient-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit">Add Patient</button>
        </form>
      </div>

      <table className="patients-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.dob}</td>
              <td>{patient.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;

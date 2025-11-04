import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Appointments.css';

const NewAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Please login to view appointments');
      navigate('/login');
      return;
    }

    loadAppointments();
  }, []);

  const loadAppointments = () => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const user = JSON.parse(localStorage.getItem('user'));
    
    // Filter appointments for current user
    const userAppointments = savedAppointments.filter(
      app => app.patientEmail === user.email
    );
    
    setAppointments(userAppointments);
  };

  const filteredAppointments = appointments.filter(app => {
    if (filter === 'All') return true;
    return app.status === filter;
  });

  const cancelAppointment = (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      const allAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      const updated = allAppointments.map(app =>
        app.id === id ? { ...app, status: 'Cancelled' } : app
      );
      localStorage.setItem('appointments', JSON.stringify(updated));
      loadAppointments();
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return '#4caf50';
      case 'Pending':
        return '#ff9800';
      case 'Cancelled':
        return '#f44336';
      case 'Completed':
        return '#2196f3';
      default:
        return '#666';
    }
  };

  return (
    <div className="appointments-page">
      <Navbar />
      
      <div className="appointments-container">
        <div className="appointments-header">
          <h1>My Appointments</h1>
          <p>View and manage your medical appointments</p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'].map(status => (
            <button
              key={status}
              className={`filter-btn ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Appointments List */}
        {filteredAppointments.length > 0 ? (
          <div className="appointments-list">
            {filteredAppointments.map(appointment => (
              <div key={appointment.id} className="appointment-card">
                <div className="appointment-header-card">
                  <div className="doctor-info-card">
                    <h3>{appointment.doctor}</h3>
                    <p className="specialty-tag">{appointment.specialty}</p>
                  </div>
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(appointment.status) }}
                  >
                    {appointment.status}
                  </span>
                </div>

                <div className="appointment-details">
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <div>
                      <strong>Date</strong>
                      <p>{new Date(appointment.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-icon">⏰</span>
                    <div>
                      <strong>Time</strong>
                      <p>{appointment.time}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-icon">💰</span>
                    <div>
                      <strong>Consultation Fee</strong>
                      <p>{appointment.fee}</p>
                    </div>
                  </div>

                  <div className="detail-item full-width">
                    <span className="detail-icon">📝</span>
                    <div>
                      <strong>Reason for Visit</strong>
                      <p>{appointment.reason}</p>
                    </div>
                  </div>
                </div>

                {appointment.status === 'Confirmed' && (
                  <div className="appointment-actions">
                    <button
                      className="btn-cancel"
                      onClick={() => cancelAppointment(appointment.id)}
                    >
                      Cancel Appointment
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-appointments">
            <div className="empty-state">
              <span className="empty-icon">📋</span>
              <h3>No Appointments Found</h3>
              <p>You don't have any {filter.toLowerCase()} appointments yet.</p>
              <button
                className="btn-book-now"
                onClick={() => navigate('/doctors')}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewAppointments;

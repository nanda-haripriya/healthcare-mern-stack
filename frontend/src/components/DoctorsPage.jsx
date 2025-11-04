import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { doctorsAPI, appointmentsAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import '../styles/Doctors.css';

const DoctorsPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [error, setError] = useState('');
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    reason: ''
  });

  const specialties = ['All', 'Cardiologist', 'Orthopedic', 'Neurologist', 'Pediatrician', 'Dermatologist', 'Ophthalmologist'];

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [searchTerm, selectedSpecialty, doctors]);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const response = await doctorsAPI.getAllDoctors();
      setDoctors(response);
      setFilteredDoctors(response);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setError('Failed to load doctors. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filterDoctors = () => {
    let filtered = doctors;

    if (selectedSpecialty !== 'All') {
      filtered = filtered.filter(doc => doc.specialty === selectedSpecialty);
    }

    if (searchTerm) {
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
  };

  const handleBooking = (doctor) => {
    if (!isAuthenticated) {
      alert('Please login to book an appointment!');
      navigate('/login');
      return;
    }
    setSelectedDoctor(doctor);
    setBookingData({ date: '', time: '', reason: '' });
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    
    if (!bookingData.date || !bookingData.time || !bookingData.reason) {
      alert('Please fill all fields!');
      return;
    }

    setBookingLoading(true);
    setError('');

    try {
      const appointmentPayload = {
        doctorId: selectedDoctor._id,
        doctorName: selectedDoctor.name,
        specialty: selectedDoctor.specialty,
        date: bookingData.date,
        time: bookingData.time,
        reason: bookingData.reason,
        fee: selectedDoctor.fee
      };

      await appointmentsAPI.createAppointment(appointmentPayload);
      
      alert('Appointment booked successfully!');
      setSelectedDoctor(null);
      setBookingData({ date: '', time: '', reason: '' });
      navigate('/appointments');
    } catch (error) {
      console.error('Booking error:', error);
      setError(error.response?.data?.message || 'Failed to book appointment. Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="doctors-page">
        <Navbar />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading doctors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="doctors-page">
      <Navbar />
      
      <div className="doctors-container">
        <div className="doctors-header">
          <h1>Find Your Doctor</h1>
          <p>Book appointments with experienced healthcare professionals</p>
        </div>

        {error && !selectedDoctor && (
          <div className="error-banner">{error}</div>
        )}

        {/* Search and Filter */}
        <div className="search-filter-section">
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="filter-chips">
            {specialties.map(specialty => (
              <button
                key={specialty}
                className={`filter-chip ${selectedSpecialty === specialty ? 'active' : ''}`}
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {filteredDoctors.map(doctor => (
            <div key={doctor._id} className="doctor-card">
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <div className="doctor-stats">
                  <span className="stat">
                    <span className="stat-icon">⭐</span>
                    {doctor.rating}
                  </span>
                  <span className="stat">
                    <span className="stat-icon">👥</span>
                    {doctor.patients}+ patients
                  </span>
                  <span className="stat">
                    <span className="stat-icon">💼</span>
                    {doctor.experience}
                  </span>
                </div>
                <div className="doctor-fee">
                  <strong>Consultation Fee:</strong> {doctor.fee}
                </div>
                <button
                  className="btn-book-appointment"
                  onClick={() => handleBooking(doctor)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="no-results">
            <p>No doctors found. Try adjusting your search.</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => !bookingLoading && setSelectedDoctor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => !bookingLoading && setSelectedDoctor(null)}>×</button>
            
            <h2>Book Appointment</h2>
            <div className="modal-doctor-info">
              <div className="modal-doctor-image">
                <img src={selectedDoctor.image} alt={selectedDoctor.name} />
              </div>
              <div>
                <h3>{selectedDoctor.name}</h3>
                <p>{selectedDoctor.specialty}</p>
                <p className="modal-fee">{selectedDoctor.fee}</p>
              </div>
            </div>

            {error && (
              <div className="error-message">{error}</div>
            )}

            <form onSubmit={handleSubmitBooking} className="booking-form">
              <div className="form-group">
                <label>Select Date</label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  disabled={bookingLoading}
                />
              </div>

              <div className="form-group">
                <label>Select Time</label>
                <select
                  value={bookingData.time}
                  onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                  required
                  disabled={bookingLoading}
                >
                  <option value="">Choose a time slot</option>
                  {selectedDoctor.availableSlots && selectedDoctor.availableSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Reason for Visit</label>
                <textarea
                  value={bookingData.reason}
                  onChange={(e) => setBookingData({ ...bookingData, reason: e.target.value })}
                  placeholder="Briefly describe your symptoms or reason for visit"
                  rows="4"
                  required
                  disabled={bookingLoading}
                />
              </div>

              <button type="submit" className="btn-confirm-booking" disabled={bookingLoading}>
                {bookingLoading ? 'Booking...' : 'Confirm Booking'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsPage;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/Doctors.css';

const NewDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    reason: ''
  });

  // Sample doctors data
  const allDoctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15 years',
      rating: 4.9,
      patients: 1250,
      image: '👩‍⚕️',
      available: ['10:00 AM', '2:00 PM', '4:00 PM'],
      fee: '$150'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Orthopedic',
      experience: '12 years',
      rating: 4.8,
      patients: 980,
      image: '👨‍⚕️',
      available: ['9:00 AM', '11:00 AM', '3:00 PM'],
      fee: '$120'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Neurologist',
      experience: '18 years',
      rating: 5.0,
      patients: 1500,
      image: '👩‍⚕️',
      available: ['10:00 AM', '1:00 PM', '5:00 PM'],
      fee: '$180'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Pediatrician',
      experience: '10 years',
      rating: 4.7,
      patients: 850,
      image: '👨‍⚕️',
      available: ['9:00 AM', '12:00 PM', '3:00 PM'],
      fee: '$100'
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      specialty: 'Dermatologist',
      experience: '14 years',
      rating: 4.9,
      patients: 1100,
      image: '👩‍⚕️',
      available: ['11:00 AM', '2:00 PM', '4:00 PM'],
      fee: '$130'
    },
    {
      id: 6,
      name: 'Dr. Robert Brown',
      specialty: 'Ophthalmologist',
      experience: '16 years',
      rating: 4.8,
      patients: 1300,
      image: '👨‍⚕️',
      available: ['10:00 AM', '1:00 PM', '4:00 PM'],
      fee: '$140'
    }
  ];

  const specialties = ['All', 'Cardiologist', 'Orthopedic', 'Neurologist', 'Pediatrician', 'Dermatologist', 'Ophthalmologist'];

  useEffect(() => {
    filterDoctors();
  }, [searchTerm, selectedSpecialty]);

  const filterDoctors = () => {
    let filtered = allDoctors;

    if (selectedSpecialty !== 'All') {
      filtered = filtered.filter(doc => doc.specialty === selectedSpecialty);
    }

    if (searchTerm) {
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDoctors(filtered);
  };

  const handleBooking = (doctor) => {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Please login to book an appointment!');
      window.location.href = '/login';
      return;
    }
    setSelectedDoctor(doctor);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    
    if (!bookingData.date || !bookingData.time || !bookingData.reason) {
      alert('Please fill all fields!');
      return;
    }

    // Save booking to localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    
    const newAppointment = {
      id: Date.now(),
      doctor: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      patientEmail: user.email,
      date: bookingData.date,
      time: bookingData.time,
      reason: bookingData.reason,
      status: 'Confirmed',
      fee: selectedDoctor.fee
    };

    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    alert('Appointment booked successfully!');
    setSelectedDoctor(null);
    setBookingData({ date: '', time: '', reason: '' });
  };

  return (
    <div className="doctors-page">
      <Navbar />
      
      <div className="doctors-container">
        <div className="doctors-header">
          <h1>Find Your Doctor</h1>
          <p>Book appointments with experienced healthcare professionals</p>
        </div>

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
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image">{doctor.image}</div>
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

        {doctors.length === 0 && (
          <div className="no-results">
            <p>No doctors found. Try adjusting your search.</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDoctor(null)}>×</button>
            
            <h2>Book Appointment</h2>
            <div className="modal-doctor-info">
              <span className="modal-doctor-image">{selectedDoctor.image}</span>
              <div>
                <h3>{selectedDoctor.name}</h3>
                <p>{selectedDoctor.specialty}</p>
                <p className="modal-fee">{selectedDoctor.fee}</p>
              </div>
            </div>

            <form onSubmit={handleSubmitBooking} className="booking-form">
              <div className="form-group">
                <label>Select Date</label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label>Select Time</label>
                <select
                  value={bookingData.time}
                  onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                  required
                >
                  <option value="">Choose a time slot</option>
                  {selectedDoctor.available.map(time => (
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
                />
              </div>

              <button type="submit" className="btn-confirm-booking">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewDoctors;

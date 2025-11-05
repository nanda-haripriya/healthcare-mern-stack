# 🏥 Healthcare Management System - Full Stack Application

A modern, full-featured healthcare management system built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a complete solution for managing doctors, patients, and appointments with a beautiful, responsive UI.

## ✨ Features

### 🚫 **Double-Booking Prevention** ⭐ NEW
- Smart appointment conflict detection
- Prevents booking the same doctor at the same time
- Real-time availability checking
- Clear warning messages for unavailable slots

### 🔔 **Toast Notification System** ⭐ NEW
- Beautiful slide-in notifications
- Success, Error, Warning, and Info types
- Auto-dismiss with manual close option
- Replaces all basic alerts for better UX

### 📅 **Date Validation** ⭐ NEW
- Prevents booking appointments in the past
- Automatic date validation on frontend and backend
- User-friendly error messages

### 🎨 Modern UI/UX
- **Full-screen responsive design** optimized for all devices
- **Beautiful gradient themes** with distinct color schemes for each section:
  - 🟢 Emerald/Green for Home & Navigation
  - 🔵 Teal/Cyan for Authentication
  - 🟣 Purple/Indigo for Doctors
  - 🟠 Orange/Coral for Services
- **Professional doctor profiles** with real images
- **Smooth animations** and transitions throughout

### 👨‍⚕️ Doctor Management
- Browse 15+ doctors across multiple specialties
- Filter by specialty (Cardiologist, Orthopedic, Neurologist, etc.)
- Search by doctor name or specialty
- View detailed doctor profiles with ratings, experience, and fees
- Real professional headshot images

### 📅 Appointment Booking
- Easy appointment scheduling system
- Select preferred date and time slots
- Add reason for visit
- View all your appointments
- Filter appointments by status (Pending, Confirmed, Completed, Cancelled)

### 🔐 Authentication & Authorization
- Secure user registration and login
- JWT-based authentication
- Password encryption with bcrypt
- Protected routes and API endpoints

### 🏥 Services
- Comprehensive healthcare services listing
- Emergency Care, Surgery, Diagnostics, and more
- Detailed service descriptions with features

## 🚀 Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **CSS3** - Styling with modern gradients and animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### Clone the Repository
```bash
git clone https://github.com/nanda-haripriya/HealthCare-FULLSTACK.git
cd HealthCare-FULLSTACK
```

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your credentials:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

5. Seed the database with doctors:
```bash
node seedDoctors.js
```

6. Start the backend server:
```bash
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## 🗄️ Database Schema

### User Model
- Name, Email, Password
- Role (Patient/Doctor/Admin)
- Phone, Date of Birth, Gender, Address

### Doctor Model
- Name, Specialty, Experience
- Rating, Patient Count
- Available Slots, Consultation Fee
- Contact Information, Profile Image

### Appointment Model
- Patient & Doctor References
- Date, Time, Reason
- Status (Pending/Confirmed/Completed/Cancelled)
- Fee

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID

### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments/user/:userId` - Get user appointments
- `PATCH /api/appointments/:id` - Update appointment status
- `DELETE /api/appointments/:id` - Cancel appointment

## 📱 Screenshots

### Home Page
Beautiful hero section with call-to-action buttons and feature highlights.

### Doctors Page
Grid layout showcasing all doctors with filtering and search capabilities.

### Appointment Booking
Intuitive booking modal with date/time selection and reason input.

### Services Page
Comprehensive list of healthcare services with detailed descriptions.

## 🎨 Color Themes

- **Navigation & Home**: `#10b981` → `#059669` → `#047857` (Emerald/Green)
- **Authentication**: `#06b6d4` → `#0891b2` → `#0e7490` (Teal/Cyan)
- **Doctors**: `#8b5cf6` → `#7c3aed` (Purple/Indigo)
- **Services**: `#f97316` → `#ea580c` → `#dc2626` (Orange/Coral)

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes
- Input validation and sanitization
- Environment variable protection

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/healthcare
JWT_SECRET=your_super_secret_jwt_key
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Authors

- **Nanda Haripriya** - [GitHub](https://github.com/nanda-haripriya)

## 🙏 Acknowledgments

- Doctor images from Unsplash
- Icons and design inspiration from modern healthcare applications
- MERN stack community for excellent documentation

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

---

**Made with ❤️ using the MERN Stack**

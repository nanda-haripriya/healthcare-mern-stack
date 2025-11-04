import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import NewHome from "./components/NewHome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DoctorsPage from "./components/DoctorsPage";
import AppointmentsPage from "./components/AppointmentsPage";
import NewServices from "./components/NewServices";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/services" element={<NewServices />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

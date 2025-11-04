import React, { useState } from "react";
import api from "../services/api";

const AddPatient = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    admittedDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/patients", form);
      alert("✅ Patient Added Successfully!");
      setForm({ name: "", age: "", gender: "", disease: "", admittedDate: "" });
    } catch (err) {
      alert("❌ Error adding patient");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <h2>Add New Patient</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br/>
      <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required /><br/>
      <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required /><br/>
      <input name="disease" placeholder="Disease" value={form.disease} onChange={handleChange} required /><br/>
      <input name="admittedDate" type="date" value={form.admittedDate} onChange={handleChange} required /><br/>
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatient;

import Appointment from "../models/appointmentModel.js";

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient")
      .populate("doctor");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

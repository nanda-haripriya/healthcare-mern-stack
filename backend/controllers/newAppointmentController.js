import Appointment from "../models/appointmentModel.js";
import Doctor from "../models/doctorModel.js";

// @desc    Get all appointments for a user
// @route   GET /api/appointments
// @access  Private
export const getUserAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id })
      .populate("doctorId", "name specialty")
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Private
export const createAppointment = async (req, res) => {
  try {
    const { doctorId, doctorName, specialty, date, time, reason, fee } =
      req.body;

    // Validate required fields
    if (!doctorId || !date || !time || !reason) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Validate date is not in the past
    const appointmentDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (appointmentDate < today) {
      return res.status(400).json({
        success: false,
        message: "Cannot book appointments for past dates",
      });
    }

    // Check if doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // Check if doctor already has an appointment at this date and time
    const existingAppointment = await Appointment.findOne({
      doctorId,
      date,
      time,
      status: { $in: ["Pending", "Confirmed"] }, // Only check active appointments
    });

    if (existingAppointment) {
      return res.status(409).json({
        success: false,
        message: `Doctor is busy! This appointment slot is already booked by another patient. Please choose a different time slot.`,
      });
    }

    // Create appointment
    const appointment = await Appointment.create({
      userId: req.user.id,
      doctorId,
      doctorName: doctorName || doctor.name,
      specialty: specialty || doctor.specialty,
      date,
      time,
      reason,
      fee: fee || doctor.fee,
      status: "Confirmed",
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Cancel appointment
// @route   PUT /api/appointments/:id/cancel
// @access  Private
export const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // Check if appointment belongs to user
    if (appointment.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to cancel this appointment",
      });
    }

    appointment.status = "Cancelled";
    await appointment.save();

    res.status(200).json({
      success: true,
      message: "Appointment cancelled successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all appointments (admin)
// @route   GET /api/appointments/all
// @access  Private/Admin
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("userId", "fullName email phone")
      .populate("doctorId", "name specialty")
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

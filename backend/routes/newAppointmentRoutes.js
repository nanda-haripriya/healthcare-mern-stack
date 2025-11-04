import express from "express";
import {
  getUserAppointments,
  createAppointment,
  cancelAppointment,
  getAllAppointments,
} from "../controllers/newAppointmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.route("/").get(protect, getUserAppointments).post(protect, createAppointment);
router.put("/:id/cancel", protect, cancelAppointment);
router.get("/all", protect, getAllAppointments);

export default router;

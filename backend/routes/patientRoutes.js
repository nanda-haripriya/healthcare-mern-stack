import express from "express";
import { getPatients, addPatient } from "../controllers/patientController.js";

const router = express.Router();

router.get("/", getPatients);
router.post("/", addPatient);

export default router;

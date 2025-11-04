import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: String, required: true },
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
    patients: { type: Number, default: 0 },
    image: { type: String, default: "👨‍⚕️" },
    availableSlots: [{ type: String }],
    fee: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;

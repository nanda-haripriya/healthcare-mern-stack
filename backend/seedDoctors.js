import mongoose from "mongoose";
import dotenv from "dotenv";
import Doctor from "./models/doctorModel.js";

dotenv.config();

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15 years",
    rating: 4.9,
    patients: 1250,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
    fee: "$150",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@healthcare.com",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Orthopedic",
    experience: "12 years",
    rating: 4.8,
    patients: 980,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    availableSlots: ["9:00 AM", "11:00 AM", "3:00 PM"],
    fee: "$120",
    phone: "+1 (555) 234-5678",
    email: "michael.chen@healthcare.com",
  },
  {
    name: "Dr. Emily Davis",
    specialty: "Neurologist",
    experience: "18 years",
    rating: 5.0,
    patients: 1500,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    availableSlots: ["10:00 AM", "1:00 PM", "5:00 PM"],
    fee: "$180",
    phone: "+1 (555) 345-6789",
    email: "emily.davis@healthcare.com",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Pediatrician",
    experience: "10 years",
    rating: 4.7,
    patients: 850,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    availableSlots: ["9:00 AM", "12:00 PM", "3:00 PM"],
    fee: "$100",
    phone: "+1 (555) 456-7890",
    email: "james.wilson@healthcare.com",
  },
  {
    name: "Dr. Lisa Anderson",
    specialty: "Dermatologist",
    experience: "14 years",
    rating: 4.9,
    patients: 1100,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    availableSlots: ["11:00 AM", "2:00 PM", "4:00 PM"],
    fee: "$130",
    phone: "+1 (555) 567-8901",
    email: "lisa.anderson@healthcare.com",
  },
  {
    name: "Dr. Robert Brown",
    specialty: "Ophthalmologist",
    experience: "16 years",
    rating: 4.8,
    patients: 1300,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    availableSlots: ["10:00 AM", "1:00 PM", "4:00 PM"],
    fee: "$140",
    phone: "+1 (555) 678-9012",
    email: "robert.brown@healthcare.com",
  },
  {
    name: "Dr. Amanda Martinez",
    specialty: "Cardiologist",
    experience: "20 years",
    rating: 5.0,
    patients: 1600,
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop",
    availableSlots: ["8:00 AM", "11:00 AM", "3:00 PM"],
    fee: "$170",
    phone: "+1 (555) 789-0123",
    email: "amanda.martinez@healthcare.com",
  },
  {
    name: "Dr. David Kim",
    specialty: "Orthopedic",
    experience: "13 years",
    rating: 4.7,
    patients: 920,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
    availableSlots: ["10:00 AM", "1:00 PM", "5:00 PM"],
    fee: "$125",
    phone: "+1 (555) 890-1234",
    email: "david.kim@healthcare.com",
  },
  {
    name: "Dr. Jennifer Taylor",
    specialty: "Gynecologist",
    experience: "17 years",
    rating: 4.9,
    patients: 1400,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop",
    availableSlots: ["9:00 AM", "12:00 PM", "4:00 PM"],
    fee: "$145",
    phone: "+1 (555) 901-2345",
    email: "jennifer.taylor@healthcare.com",
  },
  {
    name: "Dr. Christopher Lee",
    specialty: "Psychiatrist",
    experience: "11 years",
    rating: 4.8,
    patients: 780,
    image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=400&h=400&fit=crop",
    availableSlots: ["10:00 AM", "2:00 PM", "6:00 PM"],
    fee: "$160",
    phone: "+1 (555) 012-3456",
    email: "christopher.lee@healthcare.com",
  },
  {
    name: "Dr. Maria Garcia",
    specialty: "Endocrinologist",
    experience: "14 years",
    rating: 4.9,
    patients: 1050,
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop",
    availableSlots: ["9:00 AM", "1:00 PM", "4:00 PM"],
    fee: "$155",
    phone: "+1 (555) 123-4568",
    email: "maria.garcia@healthcare.com",
  },
  {
    name: "Dr. Thomas White",
    specialty: "Urologist",
    experience: "19 years",
    rating: 4.8,
    patients: 1350,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop",
    availableSlots: ["8:00 AM", "11:00 AM", "2:00 PM"],
    fee: "$165",
    phone: "+1 (555) 234-5679",
    email: "thomas.white@healthcare.com",
  },
  {
    name: "Dr. Rachel Green",
    specialty: "Radiologist",
    experience: "9 years",
    rating: 4.6,
    patients: 650,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    availableSlots: ["10:00 AM", "1:00 PM", "3:00 PM"],
    fee: "$110",
    phone: "+1 (555) 345-6780",
    email: "rachel.green@healthcare.com",
  },
  {
    name: "Dr. Daniel Harris",
    specialty: "Gastroenterologist",
    experience: "16 years",
    rating: 4.9,
    patients: 1200,
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=400&h=400&fit=crop",
    availableSlots: ["9:00 AM", "12:00 PM", "4:00 PM"],
    fee: "$150",
    phone: "+1 (555) 456-7891",
    email: "daniel.harris@healthcare.com",
  },
  {
    name: "Dr. Sophia Patel",
    specialty: "Oncologist",
    experience: "21 years",
    rating: 5.0,
    patients: 1700,
    image: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&h=400&fit=crop",
    availableSlots: ["8:00 AM", "11:00 AM", "3:00 PM"],
    fee: "$200",
    phone: "+1 (555) 567-8902",
    email: "sophia.patel@healthcare.com",
  },
];

const seedDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hospitaldb");
    
    console.log("MongoDB Connected...");
    
    // Clear existing doctors
    await Doctor.deleteMany();
    console.log("Cleared existing doctors");
    
    // Insert new doctors
    await Doctor.insertMany(doctors);
    console.log("✅ Doctors seeded successfully");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding doctors:", error);
    process.exit(1);
  }
};

seedDoctors();

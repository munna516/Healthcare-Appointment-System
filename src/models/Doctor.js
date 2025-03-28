import mongoose from "mongoose";

const { Schema } = mongoose;

const doctorSchema = new Schema(
  {
    photo_url: { type: String, required: true },
    bio: { type: String, required: true },
    services: { type: [String], required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    degrees: { type: [String], required: true },
    specialty: { type: String, required: true },
    experience: { type: Number, required: true },
    fees: {
      online: { type: Number, required: true },
      offline: { type: Number, required: true },
    },
    contact: {
      phone: { type: String, required: true },
      email: { type: String, unique: true, required: true },
    },
    location: {
      clinic_name: { type: String, required: true },
      address: { type: String, required: true },
    },
    status: {
      type: String,
      enum: ["verified", "pending", "unverified"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);

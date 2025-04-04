import mongoose from "mongoose";

const { Schema } = mongoose;

const doctorsSchema = new Schema(
  {
    email: {
        type: String,
        required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    licenseNumber: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
    },

    phone: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },

    fee: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      required: true,
    },
    registered: {
      type: Boolean,
      default: false, 
    },
  },
);

export default mongoose.models.BecameDoctor || mongoose.model("BecameDoctor", doctorsSchema);

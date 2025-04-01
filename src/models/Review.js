import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.models.Review || mongoose.model("review", ReviewSchema);

export default Review;

import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
  {
    appointmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
      required: true,
    },
    patientEmail: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentIntentId: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'succeeded', 'failed'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      default: 'stripe',
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
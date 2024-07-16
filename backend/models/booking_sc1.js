import { mongoose } from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const BookingSchema_sc1 = mongoose.model("Booking_sc1", bookingSchema);

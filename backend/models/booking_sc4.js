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

export const BookingSchema_sc4 = mongoose.model("Booking_sc4", bookingSchema);

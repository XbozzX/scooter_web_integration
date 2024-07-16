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

export const BookingSchema_sc3 = mongoose.model("Booking_sc3", bookingSchema);

//TODO: CREATE A PROPER DATA SCHEMA FOR THE BOOKING SYSTEM
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

export const BookingSchema = mongoose.model("Booking", bookingSchema);

import express from "express";
import { BookingSchema_sc1 } from "../models/booking_sc1.js";
import moment from "moment";

const route = express.Router();

// Create event
route.post("/create-event", async (request, response) => {
  console.log(request.body.title);
  console.log(request.body.start);
  console.log(request.body.end);
  try {
    if (!request.body.title || !request.body.start || !request.body.end) {
      return response.status(400).send({ message: "All field is required" });
    }
    const newBooking = {
      title: request.body.title,
      start: request.body.start,
      end: request.body.end,
    };

    const event = new BookingSchema_sc1(newBooking);
    await event.save();
    response.json({ message: "Data proccess success" });
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

// Get events
route.get("/get-event", async (request, response) => {
  try {
    const { start, end } = request.query;
    const events = await BookingSchema_sc1.find();
    response.send(events);
  } catch (error) {
    response.status(500).send({
      success: false,
      message: error,
    });
  }

  /*
  try {
    console.log("run");
    const { start, end } = request.query;
    const events = await BookingSchema.find({
      start: { $gte: moment(start).toDate() },
      end: { $lte: moment(end).toDate() },
    });
    response.send(events);
  } catch (error) {
    response.status(500).send({
      success: false,
      message: error,
    });
  }*/
});

export default route;

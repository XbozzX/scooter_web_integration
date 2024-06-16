import express from "express";
import { BookingSchema } from "../models/booking_DM.js";
import moment from "moment";

const route = express.Router();

// Create event
route.post("/create-event", async (request, response) => {
  const event = new BookingSchema(request.body);
  await event.save();
  response.sendStatus(201);
});

// Get events
route.get("/get-event", async (request, response) => {
  try {
    const { start, end } = request.query;
    const events = await BookingSchema.find();
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

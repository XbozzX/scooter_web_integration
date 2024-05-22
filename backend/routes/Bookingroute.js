//TODO: HOW TO CREATE ALL THE RESTFULL API SETUP
//TODO: FIND HOW TO SETUP BETTER SECURITY FOR THE RESTFULL API

import express from "express";
import { BookingSchema } from "../models/booking_DM.js";
import moment from "moment";

const route = express.Router();

// create the POST method

route.post("/create-event", async (request, response) => {
  const event = BookingSchema(request.body);
  await event.save();
  response.sendStatus(201);

  /*try {
    if (!request.body.title || !request.body.start || !request.body.end) {
      return response.status(400).send({ message: "pls fill" });
    }
    const newBooking = {
      title: request.body.title,
      start: request.body.start,
      end: request.body.end,
    };

    const createBooking = await BookingSchema.create(newBooking);

    return response.status(200).send(createBooking);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }*/
});

//TODO : CANNOT DISPLAY THE DATA INTO FRONTEND
route.get("/get-event", async (request, response) => {
  const scooterSchedule = await BookingSchema.find();

  return response.status(200).json({
    count: scooterSchedule.length,
    data: scooterSchedule,
  });

  /*try {
    const scooterSchedule = await BookingSchema.find({
      start: { $gte: moment(request.query.start).toDate() },
      end: { $lte: moment(request.query.end).toDate() },
    });

    response.send(scooterSchedule);
    return response.status(200).json({
      count: scooterSchedule.length,
      data: scooterSchedule,
   
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }*/
});

export default route;

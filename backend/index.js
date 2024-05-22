//TODO: FIND A SOLUTION TO BIND THE .ENV THE FILE
//const path =require('../server_fullCalendar/.env')
//require("dotenv").config();

//import key_uri from "./config.js"
import express, { request } from "express";
import { mongoose } from "mongoose";
import bodyParser from "body-parser";
import BookingRoute from "./routes/Bookingroute.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/calendar", BookingRoute);

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => console.log("mongodb connected"))
  .catch((err) => {
    console.log(err.message);
  });

app.listen(5000, () => console.log("Server started"));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome cheater");
});

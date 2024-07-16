import express, { request } from "express";
import { mongoose } from "mongoose";
import bodyParser from "body-parser";
import bookingRoute_sc1 from "./routes/Bookingroute_sc1.js";
import BookingRoute_sc2 from "./routes/Bookingroute_sc2.js";
import BookingRoute_sc3 from "./routes/Bookingroute_sc3.js";
import BookingRoute_sc4 from "./routes/Bookingroute_sc4.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/bookingRoute_sc1", bookingRoute_sc1);
app.use("/api/bookingRoute_sc2", BookingRoute_sc2);
app.use("/api/bookingRoute_sc3", BookingRoute_sc3);
app.use("/api/bookingRoute_sc4", BookingRoute_sc4);

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

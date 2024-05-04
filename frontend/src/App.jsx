import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingPage from "./pages/bookingPage";
import Scheduler_sc1_Page from "./pages/scheduler_sc1_Page";
import Scheduler_sc2_Page from "./pages/scheduler_sc2_Page";
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    // PLEASE INSERT THE PATH FOR THE PAGES HERE...
    // DO NOT INSERT ANY CODE THAT NOT PATH PAGES
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/Bookings/scheduler_1" element={<Scheduler_sc1_Page />} />
      <Route path="/Bookings/scheduler_2" element={<Scheduler_sc2_Page />} />
    </Routes>
  );
}

export default App;

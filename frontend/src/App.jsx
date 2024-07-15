import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingPage from "./pages/bookingPage";
import Scheduler_sc1_Page from "./pages/scheduler_sc1_Page";
import Scheduler_sc2_Page from "./pages/scheduler_sc2_Page";
import Scheduler_sc3_Page from "./pages/scheduler_sc3_Page";
import Scheduler_sc4_Page from "./pages/scheduler_sc4_Page";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

function App() {
  return (
    // PLEASE INSERT THE PATH FOR THE PAGES HERE...
    // DO NOT INSERT ANY CODE THAT NOT PATH PAGES
    <>
      <Routes>
        <Route path="/Booking/home" element={<BookingPage />} />
        <Route path="/Bookings/scheduler_1" element={<Scheduler_sc1_Page />} />
        <Route path="/Bookings/scheduler_2" element={<Scheduler_sc2_Page />} />
        <Route path="/Bookings/scheduler_3" element={<Scheduler_sc3_Page />} />
        <Route path="/Bookings/scheduler_4" element={<Scheduler_sc4_Page />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingPage from "./pages/bookingPage";
import Scheduler_sc1_Page from "./pages/scheduler_sc1_Page";
import Scheduler_sc2_Page from "./pages/scheduler_sc2_Page";
import Scheduler_sc3_Page from "./pages/scheduler_sc3_Page";
import AboutUs from "./pages/aboutUs";
import Modal from "react-modal";
import Login from "./pages/login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile.jsx";

Modal.setAppElement("#root");

function App() {
  return (
    // PLEASE INSERT THE PATH FOR THE PAGES HERE...
    // DO NOT INSERT ANY CODE THAT NOT PATH PAGES
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Booking/home" element={<BookingPage />} />
        <Route path="/Bookings/scheduler_1" element={<Scheduler_sc1_Page />} />
        <Route path="/Bookings/scheduler_2" element={<Scheduler_sc2_Page />} />
        <Route path="/Bookings/scheduler_3" element={<Scheduler_sc3_Page />} />
        <Route path="/Bookings/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

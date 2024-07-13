import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddBooking from "./addBooking";
import Axios from "axios";
import Moment from "moment";
import AppHeader from "./appHeader";
import { toast } from "react-toastify";

const Calendar_sc1 = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [currentDateRange, setCurrentDateRange] = useState({
    start: null,
    end: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: Moment(event.start).toDate(),
      end: Moment(event.end).toDate(),
      title: event.title,
    });
  };
  async function handleEventAdd(data) {
    try {
      const response = await Axios.post(
        "http://localhost:5000/api/bookingRoute_sc1/create-event",
        data.event
      );
      console.log("Success", response.data.event);
      toast.success("Booking have been created!");
      setErrorMessage("");
    } catch (error) {
      console.error(
        "Error:",
        error.response.data.error || "Something went wrong"
      );
      setErrorMessage(error.response.data.error || "Something went wrong");

      toast.error("Please Fill all the field!");
    }
  }

  async function handleDateSet(data) {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/bookingRoute_sc1/get-event"
      );
      setEvents(response.data);
      console.log("Success", response.data);
      toast.success("Data have been refresh!");
      setErrorMessage("");
    } catch (error) {
      console.error(
        "Error:",
        error.response.data.error || "Something went wrong"
      );
      setErrorMessage(error.response.data.error || "Something went wrong");

      toast.error("Fail to refresh the data! Please contact server admin");
    }

    /*
    "http://localhost:5000/api/calendar/get-event?start=" +
    Moment(data.start).toISOString() +
    "&end=" +
    Moment(data.end).toISOString()
    */
  }

  /*
  useEffect(() => {
    const fetchInitialEvents = async () => {
      if (currentDateRange.start && currentDateRange.end) {
        const response = await Axios.get(
          "http://localhost:5000/api/calendar/get-event?start=" +
            Moment(currentDateRange.start).toISOString() +
            "&end=" +
            Moment(currentDateRange.end).toISOString()
        );
        setEvents(response.data);
      }
    };

    fetchInitialEvents();
  }, [currentDateRange]);
*/
  return (
    <section>
      <div>
        <AppHeader />
        <div>Booking Calendar</div>
        <div>
          <button
            className="p-7 border bg-amber-200"
            onClick={() => setModelOpen(true)}
          >
            Booking
          </button>
        </div>
        <div className="relative z-0">
          <FullCalendar
            ref={calendarRef}
            events={events}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="timeGridWeek"
            eventAdd={(event) => handleEventAdd(event)}
            datesSet={(date) => handleDateSet(date)}
          />
          <AddBooking
            isOpen={modelOpen}
            onClose={() => setModelOpen(false)}
            onEventAdded={(event) => onEventAdded(event)}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar_sc1;

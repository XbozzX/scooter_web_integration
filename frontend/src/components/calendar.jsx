import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddBooking from "./addBooking";
import Axios from "axios";
import Moment from "moment";

const Calendar = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [currentDateRange, setCurrentDateRange] = useState({
    start: null,
    end: null,
  });

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: Moment(event.start).toDate(),
      end: Moment(event.end).toDate(),
      title: event.title,
    });
  };

  async function handleEventAdd(data) {
    await Axios.post(
      "http://localhost:5000/api/calendar/create-event",
      data.event
    );
  }

  async function handleDateSet(data) {
    const response = await Axios.get(
      "http://localhost:5000/api/calendar/get-event"
    );
    /*
    "http://localhost:5000/api/calendar/get-event?start=" +
    Moment(data.start).toISOString() +
    "&end=" +
    Moment(data.end).toISOString()
    */

    setEvents(response.data);
    console.log(response.data);
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
            initialView="dayGridMonth"
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

export default Calendar;

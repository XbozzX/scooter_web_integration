import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddBooking from "./addBooking";
import { useState } from "react";
import Axios from "axios";
import Moment from "moment";

const calendar = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: event.start, //Moment(event.start).toDate(),
      end: event.end, //Moment(event.end).toDate(),
      title: event.title,
    });
  };

  async function handleEventAdd(data) {
    await Axios.post(
      "http://localhost:5000/api/calendar/create-event",
      data.event
    );
  }

  async function handledDateSet(data) {
    const response = await Axios.get(
      "http://localhost:5000/api/calendar/get-event?start" +
        data.start.toString() +
        "&end=" +
        data.end.toString()

      /*"http://localhost:5000/api/calendar/get-event?start" +
        Moment(data.start).toISOString() +
        "&end=" +
        Moment(data.end).toISOString()*/
    );
    setEvents(response);
  }

  return (
    <section>
      <div>
        <div> Booking Calender</div>
        <div>
          <button
            className=" p-7 border bg-amber-200"
            onClick={() => setModelOpen(true)}
          >
            Booking
          </button>
        </div>
        <div className=" relative z-0">
          {/*" p-14 border-collapse w-full"*/}
          <FullCalendar
            ref={calendarRef} //this will call the API
            events={events}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth" //"timeGridWeek"
            eventAdd={(event) => handleEventAdd(event)}
            datesSet={(date) => handledDateSet(date)}
            /* editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventOverlap={false} */
            /* weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
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

export default calendar;

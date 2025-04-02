"use client"; // Needed for Next.js 13+ App Router

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const DoctorAvailability = () => {
    const [events, setEvents] = useState([
        {
          title: "Available Slot",
          start: new Date(2025, 3, 10, 9, 0),
          end: new Date(2025, 3, 10, 17, 0),
        },
      ]);
  
  
      const handleSelectSlot = ({ start, end }) => {
        setEvents([...events, { title: "Available", start, end }]);
      };

      const handleDoubleClick = (event) =>{
        setEvents(events.filter((e)=> e !== event));
      }
  
      const handleEventResize = ({ event, start, end }) => {
          setEvents(
          events.map((e) => (e === event ? { ...e, start, end } : e))
          );
      };
  
      const handleEventDrop = ({ event, start, end }) => {
          setEvents(
          events.map((e) => (e === event ? { ...e, start, end } : e))
          );
      };
    return (
        <div>
            <Calendar
          localizer={localizer}
          events={events} // Doctor’s availability slots
          startAccessor="start"
          selectable
          resizable
          onDoubleClickEvent={handleDoubleClick}
          onSelectSlot={handleSelectSlot}
          onEventDrop={handleEventDrop}
          onEventResize={handleEventResize}
          onEvent
          endAccessor="end"
          style={{ height: 500 }}/>
        </div>
    );
};


export default DoctorAvailability;
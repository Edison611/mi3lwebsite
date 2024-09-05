// src/WeeklyCalendar.js
import React from 'react';
import './WeeklyCalendar.css'; // Make sure to create this CSS file

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

const Rental = () => {
  return (
    <div className="calendar">
      <div className="header">
        {days.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="content">
        {timeSlots.map((time) => (
          <div key={time} className="time-slot">
            <div className="time">{time}</div>
            {days.map((day) => (
              <div key={day} className="event">
                {/* Placeholder for events */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rental;

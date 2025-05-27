import React from 'react';
//import { format, parseISO } from 'date-fns';
import { Calendar as CalendarIcon, Smile, Activity } from 'lucide-react';
import { calendarMonth, upcomingAppointments } from '../../../data/calendarData';
import './CalendarView.css';

const CalendarView = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Generate calendar grid
  const firstDayOfMonth = new Date(calendarMonth.year, getMonthIndex(calendarMonth.month), 1).getDay();
  const totalDays = calendarMonth.days.length;
  const totalCells = Math.ceil((totalDays + firstDayOfMonth) / 7) * 7;
  
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="calendar-title">
          <CalendarIcon size={18} />
          <h2>{calendarMonth.month} {calendarMonth.year}</h2>
        </div>
        <div className="calendar-actions">
          <button className="calendar-btn">Today</button>
          <div className="calendar-nav">
            <button className="calendar-nav-btn">&lt;</button>
            <button className="calendar-nav-btn">&gt;</button>
          </div>
        </div>
      </div>
      
      <div className="calendar-grid">
        {/* Day names */}
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
        
        {/* Calendar cells */}
        {Array.from({ length: totalCells }).map((_, index) => {
          const dayIndex = index - firstDayOfMonth;
          const day = calendarMonth.days[dayIndex];
          const isCurrentMonth = dayIndex >= 0 && dayIndex < totalDays;
          
          return (
            <div 
              key={index} 
              className={`calendar-cell ${isCurrentMonth ? 'current-month' : 'other-month'}`}
            >
              {isCurrentMonth && (
                <>
                  <span className="calendar-date">{day.day}</span>
                  {day.appointments.map((appointment, i) => (
                    <div key={i} className="calendar-appointment">
                      {appointment.time}
                    </div>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="upcoming-appointments">
        {upcomingAppointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-icon">
              {appointment.icon === 'tooth' ? <Smile size={18} /> : <Activity size={18} />}
            </div>
            <div className="appointment-details">
              <h3 className="appointment-title">{appointment.title}</h3>
              <p className="appointment-doctor">{appointment.doctor}</p>
              <p className="appointment-time">{appointment.time} • {appointment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get month index
function getMonthIndex(monthName) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months.findIndex(month => month === monthName);
}

export default CalendarView;
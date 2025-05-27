import React from 'react';
import { Calendar, CheckCircle, Eye, Heart, Activity } from 'lucide-react';
import { upcomingSchedule } from '../../../data/scheduleData';
import SimpleAppointmentCard from '../../SimpleAppointmentCard/SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <div className="schedule-header">
        <div className="schedule-title">
          <Calendar size={18} />
          <h2>The Upcoming Schedule</h2>
        </div>
        <button className="schedule-btn">See all</button>
      </div>
      
      <div className="schedule-days">
        {upcomingSchedule.map((day) => (
          <div key={day.id} className="schedule-day">
            <h3 className="day-title">On {day.day}</h3>
            
            <div className="day-appointments">
              {day.appointments.map((appointment) => (
                <SimpleAppointmentCard 
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                  doctor={appointment.doctor}
                  status={appointment.status}
                  icon={getAppointmentIcon(appointment.icon)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get appointment icon
function getAppointmentIcon(name) {
  const props = { size: 18 };
  
  switch (name) {
    case 'check-circle': return <CheckCircle {...props} />;
    case 'eye': return <Eye {...props} />;
    case 'heart': return <Heart {...props} />;
    case 'brain': return <Activity {...props} />; // Using Activity as placeholder for brain
    default: return <Calendar {...props} />;
  }
}

export default UpcomingSchedule;
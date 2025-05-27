import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, doctor, status, icon }) => {
  return (
    <div className={`appointment-card ${status}`}>
      <div className="appointment-card-icon">
        {icon}
      </div>
      <div className="appointment-card-details">
        <h3 className="appointment-card-title">{title}</h3>
        <p className="appointment-card-doctor">{doctor}</p>
        <p className="appointment-card-time">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
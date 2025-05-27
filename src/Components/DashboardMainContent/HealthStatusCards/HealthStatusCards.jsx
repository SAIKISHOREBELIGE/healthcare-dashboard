import React from 'react';
import toothIcon from './tooth-svgrepo-com.svg';
import lungsIcon from './lungs-svgrepo-com.svg';
import boneIcon from './bone-svgrepo-com.svg';

import { healthStatusCards } from '../../../data/healthData';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map((card) => (
        <div key={card.id} className={`status-card ${card.status}`}>
          <div className="status-icon">
            {getStatusIcon(card.icon)}
          </div>
          <div className="status-info">
            <h3 className="status-name">{card.name}</h3>
            <p className="status-date">{card.date}</p>
          </div>
          <div className={`status-indicator ${card.status}`}></div>
        </div>
      ))}
    </div>
  );
};

// Helper function to render the appropriate icon
function getStatusIcon(name) {
  switch (name) {
    case 'lungs':
      return <img src={lungsIcon} alt="Lungs" width={20} height={20} />;
    case 'teeth':
      return <img src={toothIcon} alt="Teeth" width={20} height={20} />;
    case 'bone':
      return <img src={boneIcon} alt="Bone" width={20} height={20} />;
    default:
      return null;
  }
}

export default HealthStatusCards;
import React from 'react';
import { Heart, Settings as Lungs } from 'lucide-react';
import { healthStatus } from '../../../data/healthData';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <h2 className="section-title">Health Status</h2>
      
      <div className="anatomy-visualization">
        <div className="human-body">
          <img 
            src="/humanbody.svg (2).png" 
            alt="Human body anatomy visualization" 
            className="body-image" 
          />
          
          {/* Health status indicators */}
          <div className={`health-indicator heart ${healthStatus.heart.status}`}>
            <div className="indicator-dot"></div>
            <div className="indicator-label">
              <span>Healthy Heart</span>
            </div>
          </div>
          
          <div className={`health-indicator lungs ${healthStatus.lungs.status}`}>
            <div className="indicator-dot"></div>
            <div className="indicator-label">
              <span>Lungs</span>
            </div>
          </div>
          
          <div className={`health-indicator teeth ${healthStatus.teeth.status}`}>
            <div className="indicator-dot"></div>
            <div className="indicator-label">
              <span>Teeth</span>
            </div>
          </div>
          
          <div className={`health-indicator bone ${healthStatus.bone.status}`}>
            <div className="indicator-dot"></div>
            <div className="indicator-label">
              
              <span>Bone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
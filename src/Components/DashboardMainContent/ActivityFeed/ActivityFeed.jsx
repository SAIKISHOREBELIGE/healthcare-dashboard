import React from 'react';
import { BarChart2 } from 'lucide-react';
import { weeklyActivity } from '../../../data/activityData';
import './ActivityFeed.css';

const ActivityFeed = () => {
  // Find the maximum count to normalize the bars
  const maxCount = Math.max(...weeklyActivity.dailyStats.map(day => day.count));
  
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <div className="activity-title">
          <BarChart2 size={18} />
          <h2>Activity</h2>
        </div>
      </div>
      
      <div className="activity-summary">
        <h3 className="activity-count">
          <span className="highlight">{weeklyActivity.totalAppointments}</span> appointments on this week
        </h3>
        <p className="activity-date">
          {weeklyActivity.weekStartDate} - {weeklyActivity.weekEndDate}
        </p>
      </div>
      
      <div className="activity-chart">
        {weeklyActivity.dailyStats.map((day, index) => {
          const barHeight = day.count ? (day.count / maxCount) * 100 : 0;
          
          return (
            <div key={index} className="chart-column">
              <div 
                className="chart-bar" 
                style={{ height: `${barHeight}%` }}
                data-count={day.count > 0 ? day.count : ''}
              ></div>
              <div className="chart-label">{day.day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
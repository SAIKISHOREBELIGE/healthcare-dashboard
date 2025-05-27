import React from 'react';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        <div className="dashboard-section anatomy-container">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="dashboard-section calendar-container">
          <CalendarView />
        </div>
        <div className="dashboard-section schedule-container">
          <UpcomingSchedule />
        </div>
        <div className="dashboard-section activity-container">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
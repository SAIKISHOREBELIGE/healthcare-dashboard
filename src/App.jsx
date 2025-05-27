// App.jsx
import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardMainContent from './Components/DashboardMainContent/DashboardMainContent';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;

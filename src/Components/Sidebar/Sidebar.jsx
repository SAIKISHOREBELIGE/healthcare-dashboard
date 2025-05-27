import React from 'react';
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  FileCheck, 
  BarChart2, 
  Clipboard, 
  MessageSquare, 
  HelpCircle, 
  Settings 
} from 'lucide-react';
import { navigationLinks } from '../../data/navigationLinks';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-heading">General</h3>
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navigationLinks.map((link) => (
              <li key={link.id} className={`nav-item ${link.active ? 'active' : ''}`}>
                <a href="#" className="nav-link">
                  {getIcon(link.icon)}
                  <span>{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

// Helper function to render the appropriate icon
function getIcon(name) {
  const props = { size: 18 };
  
  switch (name) {
    case 'dashboard': return <LayoutDashboard {...props} />;
    case 'history': return <History {...props} />;
    case 'calendar': return <Calendar {...props} />;
    case 'appointments': return <FileCheck {...props} />;
    case 'statistics': return <BarChart2 {...props} />;
    case 'tests': return <Clipboard {...props} />;
    case 'chat': return <MessageSquare {...props} />;
    case 'support': return <HelpCircle {...props} />;
    case 'settings': return <Settings {...props} />;
    default: return <LayoutDashboard {...props} />;
  }
}

export default Sidebar;
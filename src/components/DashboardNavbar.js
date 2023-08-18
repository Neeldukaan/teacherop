import React from 'react';

const DashboardNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/dashboard">My Dashboard</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/notifications">Notifications</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;

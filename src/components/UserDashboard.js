import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import DashboardNavbar from './DashboardNavbar';
import UserProfile from './UserProfile';
import DashboardContent from './DashboardContent';
// Import other components as needed...

const UserDashboard = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="container my-5">
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-4">
          <UserProfile name={userData ? userData.name : 'User'} email={userData ? userData.email : 'email@example.com'} avatarUrl={userData ? userData.avatarUrl : '/path-to-default-avatar.png'} />
          {/* Add Notifications component here if you want */}
        </div>
        <div className="col-md-8">
          <h2>Welcome, {userData ? userData.name : 'User'}!</h2>
          <DashboardContent />
          {/* Add other components like UserSettings here if needed */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

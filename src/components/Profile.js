// Profile.js
import React, { useState } from 'react';
import { useAuth } from '../context/auth';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const { auth } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="profile">
      <div className="profile-button" onClick={handleProfileClick}>
        Open Profile
      </div>
      {isProfileOpen && (
        <div className="profile-card">
          <div className="profile-header">
            <h3>Welcome, {auth.user.name}!</h3>
            {/* Add any other user details you want to display */}
          </div>
          <div className="order-history">
            <h4>Order History</h4>
            {/* Display the user's order history */}
            {/* You can map through user.orders and display each order */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;

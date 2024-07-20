// pages/login/Profile.js
import React from 'react';
import { useUser } from '../../components/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-6xl font-bold text-center mb-8">User Profile</h1>
        {user ? (
        <div>
          <p className="text-lg leading-relaxed">Name: {user.name}</p>
          <p className="text-lg leading-relaxed mb-8">Email: {user.email}</p>
          <button className="button-2" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
      </div>
  );
};

export default Profile;

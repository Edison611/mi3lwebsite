import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [admin, setAdmin] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!user) {
      return;
    }
    fetch("https://mi3lwebsite-api.vercel.app/verify-admin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setAdmin(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (user === null) {
    // User is not logged in, redirect to login
    return navigate('/login');
  }

  if (!admin) {
    // User is not an admin
    return <div className="text-6xl font-bold text-center mb-8">You do not have permission to view this page</div>;
  }

  // User is an admin
  return Component;
};

export default ProtectedRoute;

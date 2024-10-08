import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const { user } = useUser();

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
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (user === null) {
    // User is not logged in, redirect to login
    return <div className="text-6xl font-bold text-center mt-8 mb-8">Please Login</div>;
  }

  if (loading) {
    return <div className="text-6xl font-bold text-center mt-8 mb-8">Loading...</div>;
  }

  if (!admin) {
    // User is not an admin
    return <div className="text-6xl font-bold text-center mt-8 mb-8">You do not have permission to view this page</div>;
  }

  // User is an admin
  return Component;
};

export default ProtectedRoute;

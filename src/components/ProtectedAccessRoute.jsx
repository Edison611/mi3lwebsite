import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';

const ProtectedAccessRoute = ({ element: Component, page_id, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [access, setAccess] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      return;
    }
    fetch("https://mi3lwebsite-api.vercel.app/verify-access", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, page_id: page_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAccess(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false)
      });
  }, []);

  if (user === null) {
    // User is not logged in, redirect to login
    return <div className="text-3xl font-bold text-center mt-8 mb-8">Please Login To Access This Page</div>;
  }

  if (loading) {
    return <div className="text-3xl font-bold text-center mt-8 mb-8">Loading...</div>
  }

  if (!access) {
    return <div className="text-3xl font-bold text-center mt-8 mb-8">Only members are allowed to access this page. If you are a member, please ask an organization member to give you access.</div>;
  }

  // User is an admin
  return Component;
};

export default ProtectedAccessRoute;

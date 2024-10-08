// Login.js
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useUser } from '../../components/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  function addUser(u) {
    fetch('https://mi3lwebsite-api.vercel.app/add-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(u),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const responseMessage = (response) => {
    const userObject = jwtDecode(response.credential)
    setUser(userObject)
    addUser(userObject)
    navigate("/profile")
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  console.log(user)

  return (
    <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-6xl font-bold text-center mb-8">Login</h1>
        <p className="text-lg leading-relaxed">Sign In Using Google Account:</p>
        <div className='text-center'>
          {!user && <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />}
          {user && <h2>Already Logged In</h2>}
        </div>
      </div>
  );
}

export default Login;

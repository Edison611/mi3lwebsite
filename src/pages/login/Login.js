import React from 'react';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const responseMessage = (response) => {
        console.log(response);
        setLoggedIn(true)

    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {!loggedIn && <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />}
            {loggedIn && <h2>Logged In</h2>}
        </div>
    )
}
export default Login;
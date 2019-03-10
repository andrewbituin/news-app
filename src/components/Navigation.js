import React from 'react';
import './Navigation.css'
export default function NavBar(){
    return(
        <div className="navigation">
            <button type="click" className="home-button">Home</button>
            <button type="click" className="register-button">Register</button>
            <button type="click" className="login-button">Log in</button>
        </div>
    );
}
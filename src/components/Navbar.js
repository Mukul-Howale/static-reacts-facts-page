import React from "react";
import "../style.css";
import logo from "./../images/logo192.png";

export default function Navbar(){
    return (
        <header>
            <img src={logo} alt="React-Icon"></img>
            <h2 className="title">ReactFacts</h2>
            <h3 className="toggleLight">Light</h3>
            <div className="toggle">
                <div className="toggleButton"></div>
            </div>
            <h3 className="toggleDark">Dark</h3>
            <h3>React Course - Project 1</h3>
        </header>
    )
}
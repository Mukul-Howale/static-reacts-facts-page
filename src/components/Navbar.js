import React from "react";
import "../style.css";
import logo from "./../images/logo192.png";

export default function Navbar(){
    return (
        <header>
            <img src={logo} alt="React-Icon"></img>
            <h2>ReactFacts</h2>
            <h3>React Course - Project 1</h3>
        </header>
    )
}
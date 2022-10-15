import React from "react";
import "../styles/style.css";
import "../styles/navbar.css";
import logo from "./../images/logo192.png";

export default function Navbar(props){

    return (
        <header className={props.theme ? "dark" : ""}>
            <img src={logo} alt="React-Icon"></img>
            <h2 className="title">ReactFacts</h2>
            <h3 className="toggle-light-label">Light</h3>
            <div className="toggle" onClick={props.toggleTheme}>
                <div className="toggle-slider"></div>
            </div>
            <h3 className="toggle-dark-label">Dark</h3>
            <h3 className="project-title">React Course - Project 1</h3>
        </header>
    )
}
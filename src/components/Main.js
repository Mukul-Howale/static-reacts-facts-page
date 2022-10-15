import React from "react";
import "../styles/style.css";
import "../styles/main.css";
import bullet from "../images/Ellipse 1.png";
import reactLogo from "../images/reactjs-icon 2.png";

export default function Main(props){
    return (
        <div className={`main ${props.theme ? "dark" : ""}`}>
            <p>Fun facts about React</p>
            <div className="points">
                <div>
                    <img src={bullet} alt="bullet"></img>
                    <p>Was first released in 2013</p>
                </div>
                <div>
                    <img src={bullet} alt="bullet"></img>
                    <p>Was originally created by Jordan Walke</p>
                    </div>
                <div>
                    <img src={bullet} alt="bullet"></img>
                    <p>Has well over 100K stars on GitHub</p>
                    </div>
                <div>
                    <img src={bullet} alt="bullet"></img>
                    <p>Is maintained by Facebook</p>
                    </div>
                <div>
                    <img src={bullet} alt="bullet"></img>
                    <p>Powers thousands of enterprise apps, including mobile apps</p>
                    </div>
            </div>
            <img src={reactLogo} alt="react-logo" className="react-js-logo"></img>
        </div>
    )
}
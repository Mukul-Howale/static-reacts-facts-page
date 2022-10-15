import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App(){
    const [theme, setTheme] = useState(() =>{
        if(!localStorage.getItem("theme")){
            localStorage.setItem("theme", JSON.stringify(false));
        }
        return JSON.parse(localStorage.getItem("theme"));
    });

    function toggleTheme(){
        setTheme(preValue => !preValue);
    }

    localStorage.setItem("theme", JSON.stringify(theme));

    return (
        <>
            <Navbar
                toggleTheme = {toggleTheme}
                theme = {theme}
            />
            <Main
                theme = {theme}
            />
        </>
    )
}

export default App;
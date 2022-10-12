import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App(){
    const [darkMode, setDarkMode] = useState(true);

    function toggleTheme(){
        setDarkMode(preValue => !preValue);
    }

    return (
        <>
            <Navbar
                toggleTheme = {toggleTheme}
            />
            <Main/>
        </>
    )
}

export default App;
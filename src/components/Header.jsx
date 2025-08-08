import React from "react";
import { useState } from "react";

const Header = () => {

    // const btnName = "Login";
    const[btnName, setbtnName] = useState("Login");
    return(
    <div className="header">
        <img className="logocontainer"
        src="src/javascript.svg"/>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    btnName === "Logout" ? setbtnName("Login") : setbtnName("Logout");
                }} 
                >{btnName}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;
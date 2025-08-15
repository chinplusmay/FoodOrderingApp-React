import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    // const btnName = "Login";
    const[btnName, setbtnName] = useState("Login");
    return(
    <div className="header">
        <img className="logocontainer"
        src="src/utils/lickin.png"/>

        <div className="nav-items">
            <ul>
                <li> <Link to="/" >Home</Link> </li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    btnName === "Logout" 
                    ? setbtnName("Login") 
                    : setbtnName("Logout");
                }} 
                >{btnName}</button>
            </ul>
        </div> 
    </div>
    )
}

export default Header;
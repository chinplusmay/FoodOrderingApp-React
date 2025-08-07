import React from "react";


const Header = () => {

    const btnName = "Login";
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
                <button className="login" >{btnName}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;
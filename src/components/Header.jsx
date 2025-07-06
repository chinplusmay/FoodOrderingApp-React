import React from "react";


const Header = () => {
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
            </ul>
        </div>
    </div>
    )
}

export default Header;
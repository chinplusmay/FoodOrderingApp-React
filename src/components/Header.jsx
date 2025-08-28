import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    // const btnName = "Login";
    const[btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(

    <div className="flex justify-between bg-pink-200 shadow-lg m-2">
        <img className="w-39"
        src="src/utils/lickin.png"/>

        <div className="flex items-center">
            <ul className="flex p-4 m-4 mt-9 ">
                <li className="pr-3.5">
                    {onlineStatus ? "✅": "❌"}
                </li>
                <li className="pr-4"> <Link to="/" >Home</Link> </li>
                <li className="pr-4">Cart</li>
                <li className="pr-4"><Link to="/about" >About</Link></li>
                <li className="pr-4"><Link to="/contact">Contact</Link></li>
                <li className="pr-4">Cart</li>
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
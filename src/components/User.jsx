import React from "react";
const User = ({name, location, contact}) =>{
    return(
        <div className="user-card" >
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: {contact}</h2> 
        </div>
    )
}

export default User;
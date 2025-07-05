import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

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

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/onpbqlanp5qoi8vfbr7a"
            alt="res-logo" />
            <h3>Haldiram's</h3>
            <h4>Namkeen, North Indian</h4>
            <h4>4.2 stars</h4>
            <h4>49 minutes</h4>
        </div>
    );
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container" style={{backgroundColor:"#f0f0f0"}}>
                <RestaurantCard />
            </div>
        </div>        
    );
};

const AppLayout = () => {
    return(
    <div className="applayout">
        <Header /> 
        <Body /> 
    </div>
    )
}

root.render(<AppLayout/>);

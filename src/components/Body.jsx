import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/dummyData";


const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container" style={{backgroundColor:"#f0f0f0"}}>
                {
                resList.map((resto) => (
                    <RestaurantCard key={resto.info.id} resData={resto} />
                ))}
                
            </div>
        </div>        
    );
};


export default Body; 
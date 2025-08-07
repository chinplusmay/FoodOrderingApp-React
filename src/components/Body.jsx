import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/dummyData";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    let [listOfRestaurant, SetRestaurant] = useState([]);
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        
            const data = await fetch(
                API_URL
            );

            const json = await data.json();
            // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            SetRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    if(listOfRestaurant.length === 0){
                return(
                     <Shimmer/>
                )
            }

    return(
        <div className="body">
            <div className="toprated">
                <button className="toprated-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => (
                        res.info.avgRating > 4.5
                    ))
                    SetRestaurant(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container" style={{backgroundColor:"#f0f0f0"}}>
                {listOfRestaurant.map((resto) => (
                    <RestaurantCard key={resto.info.id} resData={resto} />
                ))}
                
            </div>
        </div>        
    );
};


export default Body; 
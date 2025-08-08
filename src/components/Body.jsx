import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/dummyData";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, SetRestaurant] = useState([]);
    const [filtreredlistOfRestaurant, SetfiltreredlistOfRestaurant] = useState([]);  // copy of listOfRestaurant

    
    const[filterSearch, setfilterSearch] = useState("");
    
    //Whenever the state variable changes, React triggers a reconcilliation cycle(re-renders the comp)

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
            SetfiltreredlistOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return(
        listOfRestaurant.length === 0 ? (
            <Shimmer/>
        ) : (
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
                <div className="filter-search">
                    <input 
                        className="filter-in"
                        placeholder="  search..." 
                        type="text" 
                        value={filterSearch} 
                        onChange={(e)=>{
                            setfilterSearch(e.target.value);
                        }}
                    />
                    <button className="filter-btn" type="button" 
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurant.filter((res) => 
                            res.info.name.toLowerCase().includes(filterSearch.toLowerCase())
                            );

                        SetfiltreredlistOfRestaurant(filteredRestaurants);
                        // console.log(filteredRestaurants);

                        }}
                    >Enter</button>
                </div>
                <div className="res-container" style={{backgroundColor:"#f0f0f0"}}>
                    {filtreredlistOfRestaurant.map((resto) => (
                        <RestaurantCard key={resto.info.id} resData={resto} />
                    ))}
                    
                </div>
            </div>
        )       
    );
};


export default Body; 
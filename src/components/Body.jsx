import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/dummyData";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link, Links } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return(
        <h1>
            Aww no internet 😭
        </h1>
    )

    return(
        listOfRestaurant.length === 0 ? (
            <Shimmer/>
        ) : (
            <div className="body">
                    <div className="filter-controls flex items-center justify-between m-4">
                    <button className="toprated-bt bg-blue-500 text-white px-4 py-2 rounded mr-4" 
                        onClick={() => {
                            const filteredList = listOfRestaurant.filter((res) => (
                                res.info.avgRating > 4.5
                            ))
                            SetfiltreredlistOfRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>

                    <div className="filter-search flex items-center">
                        <input 
                            className="border border-solid pl-2 py-1 rounded mr-2"
                            placeholder="Search..." 
                            type="text" 
                            value={filterSearch} 
                            onChange={(e)=>{
                                setfilterSearch(e.target.value);
                            }}
                        />
                        <button className="bg-green-500 px-4 py-2 text-white rounded"
                            type="button" 
                            onClick={() => {
                                const filteredRestaurants = listOfRestaurant.filter((res) => 
                                    res.info.name.toLowerCase().includes(filterSearch.toLowerCase())
                                );
                                SetfiltreredlistOfRestaurant(filteredRestaurants);
                            }}
                        >
                            Enter
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {filtreredlistOfRestaurant.map((resto) => (
                        <Link
                            key={resto.info.id}
                            to={"restaurants/"+resto.info.id}
                        >
                        <RestaurantCard resData={resto} /></Link>
                    ))}
                    
                </div>
            </div>
        )       
    );
};


export default Body; 
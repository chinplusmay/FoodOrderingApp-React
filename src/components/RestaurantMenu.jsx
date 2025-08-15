import React from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const[resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(
            MENU_API+resId
        );
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    }
    if(resInfo === null) return <Shimmer/>;


    const {
        cloudinaryImageId,
        name,
        avgRatingString,
        totalRatingsString,
        cuisines,
        locality,
        sla,
    } = resInfo?.cards[2]?.card?.card?.info || {};

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards || [];
    console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{locality}</h3>
            <p>{cuisines.join(" ,") }</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>  ( <li key={item.card.info.id}> {item.card.info.name} - Rs.{ item.card.info.price / 100  || item.card.info.defaultPrice / 100}</li> ))}

            </ul>
        </div>
    );
}

export default RestaurantMenu;
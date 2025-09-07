import React from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

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
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) =>
            category.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);
    
    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl my-1.5" > {name} </h1>
            <h3 className="font-bold text-lg">{locality}</h3>
            <p className="font-bold text-sm" >{cuisines.join(" ,") }</p>
            
            {/* categories accordian */}
            {categories.map((category) => (
                <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} />
            ))}
        </div>
    );
}

export default RestaurantMenu;
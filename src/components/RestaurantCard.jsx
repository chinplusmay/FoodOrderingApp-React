import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    // console.log(props);
    const {resData} = props;
    // console.log(resData)
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData.info;
    return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200" >
            <img
            className="res-logo"
            src={CDN_URL + cloudinaryImageId}
            alt="res-logo" />

            <h3 className="font-bold py-4 text-lg" >{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;
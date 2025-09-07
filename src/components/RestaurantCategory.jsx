import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    // console.log(data);
    const [showItems, setShowItems] = useState(false);

    const handleClick = () =>{
        setShowItems(!showItems)
    }
    return(
        <div>
            {/* Accordian Header */}
            <div className="w-6/12 mx-auto my-4 p-4 shadow-lg  bg-gray-100 ">
                <div className="flex justify-between not-last-of-type:cursor-pointer"
                 onClick={handleClick}>
                    
                    <span className="font-bold text-lg" >{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
            
            {/*Accordian Data*/}
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;
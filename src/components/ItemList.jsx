import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    // console.log(items);
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="p-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p  className="text-xs px-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className=" bg-green-500 text-white rounded-sm">
                        Add+
                    </button>
                    </div>
                        <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
                    </div>
                    
                </div>
            ))}
        </div>

    );
}

export default ItemList;
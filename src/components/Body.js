import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";




const Body = () => {

    const[listOfRestaurants,setListOfRestaurant]=useState(resList);




//     let listOfRestaurantsJS = {
//     "restaurants": [
//     {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     "info": {
//         "id": "1037892",
//         "name": "Domino's Pizza",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/a166ceb1-9fd9-4152-93ef-f2307b6781a0_1037892.JPG",
//         "costForTwo": "₹400 for two",
//         "cuisines": ["Pizzas","Italian","Pastas","Desserts"],
//         "avgRating": 3.8,
//         "deliveryTime": 30,
//     }
//     },
//     {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     "info": {
//         "id": "1037893",
//         "name": "Kfc",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/a166ceb1-9fd9-4152-93ef-f2307b6781a0_1037892.JPG",
//         "costForTwo": "₹400 for two",
//         "cuisines": ["Pizzas","Italian","Pastas","Desserts"],
//         "avgRating": 4.3,
//         "deliveryTime": 30,
//     }
//     },
//     {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     "info": {
//         "id": "1037894",
//         "name": "MCD",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/a166ceb1-9fd9-4152-93ef-f2307b6781a0_1037892.JPG",
//         "costForTwo": "₹400 for two",
//         "cuisines": ["Pizzas","Italian","Pastas","Desserts"],
//         "avgRating": 4.4,
//         "deliveryTime": 30,
//     }
//     }
// ]
// };






    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    //filter logic

                    const filteredList=listOfRestaurants.restaurants.filter(
                        (res) => res.info.avgRating && res.info.avgRating > 4
                    );
                    setListOfRestaurant({
                        restaurants:filteredList
                    });
                }}
                >Top Rated restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
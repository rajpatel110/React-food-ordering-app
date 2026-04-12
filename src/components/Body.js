import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
//import { Link } from "react-router-dom";

const Body = () => {

    const[listOfRestaurants,setListOfRestaurant]=useState([]);
    const[filteredRestaurants,setFilteredRestaurant]=useState([]);

    const[searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.3912158&lng=80.3559814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    return listOfRestaurants.length ===0 ? (
    <Shimmer /> 
    ): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button onClick={()=>{
                        //filter restaurant cards and update UI
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes (searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button
                className="filter-btn"
                onClick={()=>{
                    //filter logic

                    const filteredList=listOfRestaurants.filter(
                        (res) => res.info.avgRating && res.info.avgRating > 4.7
                    );
                    setFilteredRestaurant((filteredList));
                }}
                >Top Rated restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    // <Link
                    // key={restaurant.data.id}
                    //  to={"/restaurants/"+restaurant.data.id}>
                    //<RestaurantCard resData={restaurant}/>
                    // </Link> 
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
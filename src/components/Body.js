import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
//import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection</h1>

    return listOfRestaurants.length ===0 ? (
    <Shimmer /> 
    ): (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="border border-solid border-black" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        //filter restaurant cards and update UI
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes (searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurants);
                    }}>Search</button>
                </div>

                <div className="search m-4 p-4 flex items-center ">
                <button
                className="px-4 py-2 bg-green-100 rounded-lg"
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

            </div>
            <div className="flex flex-wrap">
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
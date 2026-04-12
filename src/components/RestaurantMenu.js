import { useState,useEffect } from "react";
//import shimmer from "./Shimmer";
//import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

   // const [resInfo , setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.3912158&lng=80.3559814&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER"
        );
        
        //const json = await data.json();

        //console.log(json);
        //setResInfo(json.data);
    };

    //if(resInfo === null) return <shimmer/>

    //const {name,cuisines,costForTwoMessage}= resInfo?.cards[0]?.card?.card?.info;

    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    return(
        <div className="menu">
            {/*<p>*/}
            {/* <h1>{name}</h1> */}
            {/* <h3>{cuisines.join(", ")}</h3> */}
            {/* <h3>{costForTwoMessage}</h3> */}
            {/*<p>*/}
            
            <ul>
                {/* {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                    {item.card.info.name}</li>
                ))} */}

                <li>Pizza</li>
                <li>Burger</li>
                <li>French Fries</li>
                <li>Cold Drink</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;
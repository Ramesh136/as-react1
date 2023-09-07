import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../constants";
import { useEffect, useState } from "react";
import {newData} from "../constants"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filtered = (restaurantData , searchText)=> {

   return restaurantData.filter((restaurants)=>{
      
        return restaurants.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
}


const Body = ()=> {

    const [searchText,setSearchText] = useState("");
    const [filteredRestaurantData , setFilteredRestaurantData] = useState([]);
    const [restaurantData , setRestaurantData] = useState([]);

    useEffect(()=>{
        getRestaurant()
        console.log('API called')
    },[])

    console.log('rendered')

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        setRestaurantData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (!restaurantData) return null;

    return restaurantData?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
        <div>
            <input 
                type="text"
                className="search-input"
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
            />
            <button
                className="search-btn"
                onClick={()=>{
                    const data = filtered(restaurantData , searchText)
                    setFilteredRestaurantData(data)
                } }
            >
                 Search
            </button>
        </div>
        <div className="restaurant-list">
        {filteredRestaurantData.length===0 && <h1>No Matches Found</h1>}
        {filteredRestaurantData.map((restaurant) => {
            return <Link to = {"/restaurant/"+restaurant.info.id} key={restaurant.info.id} ><RestaurantCard {...restaurant.info} /></Link>;
        })}
        </div>
        </>
      
    )
  
  }
  
  export default Body
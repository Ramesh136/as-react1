import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../utils/constants";
import { useEffect, useState } from "react";
import {newData} from "../utils/constants"
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
        <div className="p-2 bg-lime-100 shadow-md my-3 w-80">
            <input 
                type="text"
                className="border border-black pl-2"
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
            />
            <button
                className=" ml-2 px-2 bg-purple-600 text-white rounded-md"
                onClick={()=>{
                    const data = filtered(restaurantData , searchText)
                    setFilteredRestaurantData(data)
                } }
            >
                 Search
            </button>
        </div>
        <div className="flex flex-wrap pl-2 pt-2">
        {filteredRestaurantData.length===0 && <h1>No Matches Found</h1>}
        {filteredRestaurantData.map((restaurant) => {
            return <Link to = {"/restaurant/"+restaurant.info.id} key={restaurant.info.id} ><RestaurantCard {...restaurant.info} /></Link>;
        })}
        </div>
        </>
      
    )
  
  }
  
  export default Body
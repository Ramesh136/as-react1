import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../constants";
import { useState } from "react";

const filtered = (restaurantData , searchText)=> {

   return restaurantData.filter((restaurants)=>{
      
        return restaurants.data.name.includes(searchText)
    })
}


const Body = ()=> {

    const [searchText,setSearchText] = useState("");
    const [restaurantData , setRestaurantData] = useState(restrautList);

    return (
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

                    setRestaurantData(data)
                    
                } }
            >
                 Search
            </button>
        </div>
        <div className="restaurant-list">
        {restaurantData.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
        </div>
        </>
      
    )
  
  }
  
  export default Body
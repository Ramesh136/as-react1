import { useEffect , useState} from "react"
import { useParams } from "react-router-dom"
import { IMG_URL } from "../constants" 
import Shimmer from "./Shimmer"
import { useDispatch } from "react-redux"
import { addItem } from "../cartSlice"

const RestaurantMenu =()=>{

    const {id} = useParams()

    const [rest , setRest] = useState("Loading..")
    const [itemsList , setItemsList] = useState(null)

    useEffect(()=>{
        fetchMenu()
    },[])

    async function fetchMenu(){
        const emp = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1042445&lng=77.5713193&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER")
        // const items = await emp.data.cards[2].groupCard.cardGroupMap.cards[2].card.card.itemCards
        const empdata = await emp.json()
        const items =  empdata.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
        setItemsList(items)
        setRest(empdata.data.cards[0].card.card.info)
    }

    const dispatch = useDispatch()
    const itemHandler = (item)=>{
      dispatch(addItem(item))
    }

    return !itemsList ? (
        <Shimmer />
      ) : <div className="flex">
    <div className="m-3">
      <h1>Restraunt id: {id}</h1>
      <h2 className = "font-bold">{rest?.name}</h2>
      <img src={IMG_URL + rest?.cloudinaryImageId} />
      <h3>{rest?.areaName}</h3>
      <h3>{rest?.city}</h3>
      <h3>{rest?.avgRating} stars</h3>
      <h3>{rest?.costForTwoMessage}</h3>
    </div>
    <div className="m-3">
      <h1 className = "font-bold">Menu</h1>
      <ul>
        {itemsList.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - <button className="m-2 p-2 bg-red-300"
           onClick={()=>{
            itemHandler(item)
          }}>Add</button></li>
        ))}
      </ul>
    </div>
  </div>
}

export default RestaurantMenu
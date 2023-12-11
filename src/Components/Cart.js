import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../cartSlice";


const Cart = ()=>{

    const cartItems = useSelector(store =>store.cart.item)
    const dispatch = useDispatch()

    console.log(cartItems)

    const cartHandler = ()=>{
        dispatch(clearCart())
    }

    return <div>
        Cart items 
        <button 
        className="m-2 p-2 bg-blue-400 rounded-md text-white"
        onClick = {()=>{
            cartHandler()
        }}>Clear Cart</button>
        
         <div className ="flex flex-wrap">
         {cartItems.map(item=>{
            return <CartCard key = {item.card.info.id} {...item.card.info}/>
         })}
         </div>
        </div>
}

export default Cart ;
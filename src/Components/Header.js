import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {

    return (
      <a href = "/">
        <img className="h-20 p-2 rounded-md"
             src = "https://static.vecteezy.com/system/resources/previews/006/636/901/original/letter-bp-logo-design-template-free-vector.jpg" 
              alt = "logo"
        /> 
      </a>
    )
  }
  
  const Header = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false)

    const cartItems = useSelector(store =>store.cart.item)
    return (
      <div className="flex justify-between bg-lime-200 shadow-md">
        <Title />
        <div className="nav-items">
          <ul className="flex py-5">
            <Link to ="/"><li className="px-2">Home  </li></Link>
            <Link to ="/about"><li className="px-2">About  </li></Link>
            <Link to ="/contact"><li className="px-2">Contact   </li></Link>
            <Link to = "/cart"><li className="px-2">Cart - {cartItems.length}</li></Link>
          </ul>
        </div>
        <div  className="py-5 pr-3">
          {isLoggedIn? <button onClick={()=>{
            setIsLoggedIn(false)
          }}>Log in</button> : <button onClick={()=>{
            setIsLoggedIn(true)
          }}>Log out</button>}
        </div>
      </div>
    );
  };

  export default Header
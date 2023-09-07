import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {

    return (
      <a href = "/">
        <img className="logo"
             src = "https://static.vecteezy.com/system/resources/previews/006/636/901/original/letter-bp-logo-design-template-free-vector.jpg" 
              alt = "logo"
        /> 
      </a>
    )
  }
  
  const Header = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false)
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <Link to ="/"><li>Home  </li></Link>
            <Link to ="/about"><li>About  </li></Link>
            <Link to ="/contact"><li>Contact   </li></Link>
            <Link to = "/"><li>Cart</li></Link>
          </ul>
        </div>
        <div  className="login-button">
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
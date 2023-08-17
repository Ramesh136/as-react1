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
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header
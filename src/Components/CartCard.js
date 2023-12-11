const CartCard =(
    {name , price , imageId,description}
  ) => {
  
    return (
      <div className=" p-2 mr-9 my-2 w-80 bg-orange-100 shadow-md ">
      <img
        className="h-52 "
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          imageId
        }
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <h3>{description}</h3>
      <h4>{price/10} </h4>
    </div>  
    )
  }

  export default CartCard
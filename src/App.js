/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {Outlet, createBrowserRouter , RouterProvider} from "react-router-dom" ;
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/Cart"
import { Provider } from "react-redux";
import store from "./store";


function App(){

  return (
    <Provider store ={store}>
    <Header />
    <Outlet />
    <Footer />
    </Provider>
  )
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "",
        element : <Body />,
      },
      {
        path : "about",
        element : <About />,
      },
      {
        path : "contact",
        element : <Contact />,
      },
      {
        path : "restaurant/:id",
        element : <RestaurantMenu/>,
      },
      {
        path : "cart",
        element : <Cart />,
      },

    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(<RouterProvider router = {router} />);

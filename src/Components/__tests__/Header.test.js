import { Provider } from "react-redux"
import Header from "../Header"
import { render } from "@testing-library/react"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"

test("Cart should have 0 item on rendering header" , ()=>{
     const header = render(
     <StaticRouter>
     <Provider store = {store}>
     <Header/>
     </Provider>
     </StaticRouter>)

     const cart = header.getAllByTestId("cart")

     expect(cart[0].innerHTML).toBe("Cart - 0") 
})
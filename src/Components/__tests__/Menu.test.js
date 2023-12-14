import { fireEvent, getAllByTestId, getByTestId, render, waitFor } from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import { Provider } from "react-redux"
import { MENU_DATA } from "../../mocks/data"
import Header from "../Header"
import RestaurantMenu from "../RestaurantMenu"

test("Add items to Cart" ,async  ()=>{

    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json :()=>{
                return Promise.resolve(MENU_DATA)
            }
        })
    })

    const body = render(
    <StaticRouter>
     <Provider store = {store}>
     <Header/>
     <RestaurantMenu />
     </Provider>
     </StaticRouter>
    )

    await waitFor(()=>expect(body.getByTestId("menu")))

    const buttons = body.getAllByTestId("addBtn")

    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    fireEvent.click(buttons[5])

    const cart = body.getByTestId("cart")

    expect(cart.innerHTML).toBe("Cart - 3")

})
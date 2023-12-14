import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        item : [],
    },
    reducers:{
        addItem : (state , action )=>{
            state.item.push(action.payload);
        },
        clearCart : (state)=>{
            state.item = [];

        },
    },
});

export default cartSlice.reducer ;

export const {addItem , clearCart} = cartSlice.actions ;
import { configureStore } from "@reduxjs/toolkit";
import { cartStore } from "./cartStore.";
import { productStore } from "./productStore";

export const store=configureStore({
    reducer:{
        products:productStore.reducer,
        cart:cartStore.reducer
    },
})
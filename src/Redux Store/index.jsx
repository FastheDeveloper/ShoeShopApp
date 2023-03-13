import { configureStore } from "@reduxjs/toolkit";
import { cartStore } from "./cartStore.";
import { productStore } from "./productStore";
import { apiSlice } from "./apiStore";
export const store=configureStore({
    reducer:{
        products:productStore.reducer,
        cart:cartStore.reducer,
        api:apiSlice.reducer
    },
   	// Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})    
// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import bedReducer from "./bedSlice";
import framesReducer from "./framesSlice";

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
    bed: bedReducer,
    frames: framesReducer,

    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

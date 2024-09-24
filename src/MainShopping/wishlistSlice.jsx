// src/slices/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishListItems: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishListItems.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearWishList(state) {
      state.wishListItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishList, clearWishList } =
  wishlistSlice.actions;
export const selectWishlist = (state) => state.wishlist.wishListItems;
export default wishlistSlice.reducer;

// src/slices/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortOption: "",
  filterPrice: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setFilterPrice: (state, action) => {
      state.filterPrice = action.payload;
    },
  },
});

export const { setSortOption, setFilterPrice } = filterSlice.actions;
export const selectSortOption = (state) => state.sortOption;
export const selectFilterPrice = (state) => state.filterPrice;
export default filterSlice.reducer;

import bed1 from "../assets/AdjustableTwinBaseUnitcustomerpicture.avif";
import bed2 from "../assets/Chesterfield-Mobility-Electric-Bed-3-position-adjustable0017.avif";
import bed3 from "../assets/AdjustableTwinBaseUnitjoined.avif";
import bed4 from "../assets/Ottoman-Storage-Bed-Plush-Velvet-Grey085.avif";
import bed5 from "../assets/Ottoman_bed_Oxford028.avif";
import bed6 from "../assets/Ottoman-Storage-Bed-Plush-Velvet-Grey115.avif";
import bed7 from "../assets/Queen-Ann_b288a625-29df-49d3-b064-9aed18efc7d4.avif";
import bed8 from "../assets/18_0003_Mattress_AloeVera_V01_b2aba476-6329-4fbd-9766-e91b5d372358.webp";
import bed9 from "../assets/09_0003_P5_F1_LSB_H11_60_TW_FLNM_LHS.webp";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "adjustable twin bed",
      price: 1200,
      pics: bed1,
      hoverPics: bed2,
    },
    {
      id: 2,
      name: "chesterfeild mobility electric bed",
      price: 1200,
      pics: bed2,
      hoverPics: bed3,
    },
    {
      id: 3,
      name: "adjustable twin bed base unjointed",
      price: 1200,
      pics: bed3,
      hoverPics: bed4,
    },
    {
      id: 4,
      name: "ottoman storage bed plush velvet",
      price: 1200,
      pics: bed4,
      hoverPics: bed5,
    },
    {
      id: 5,
      name: "ottoman bed oxford",
      price: 1200,
      pics: bed5,
      hoverPics: bed6,
    },
    {
      id: 6,
      name: "ottoman storage bed",
      price: 1200,
      pics: bed6,
      hoverPics: bed7,
    },
    { id: 7, name: "queen ann bed", price: 1200, pics: bed7, hoverPics: bed8 },
    {
      id: 8,
      name: "mattress aloe vera",
      price: 1200,
      pics: bed8,
      hoverPics: bed9,
    },
    {
      id: 9,
      name: "double bed base ",
      price: 1200,
      pics: bed9,
      hoverPics: bed1,
    },
  ],
};

const bedSlice = createSlice({
  name: "bed",
  initialState,
  reducers: {
    setBed: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setBed } = bedSlice.actions;
export default bedSlice.reducer;

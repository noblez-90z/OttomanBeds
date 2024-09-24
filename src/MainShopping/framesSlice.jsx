import bed1 from "../assets/Saturn-Memory-Pillow-Top-P3_6e34cde0-596c-48b6-9c8e-2604fdca4456.webp";
import bed2 from "../assets/ottoman_designed.webp";
import bed3 from "../assets/Image2.jpg";
import bed4 from "../assets/Cool-Touch-Mattress-750x504.jpg";
import bed5 from "../assets/Elegant-5000-Pocket-Spring-mattress-p3-750x510_57e2e969-912f-4301-83df-06d321330366 (1).webp";
import bed6 from "../assets/bed_sosoft.webp";
import { createSlice } from "@reduxjs/toolkit";

const framesSlice = createSlice({
  name: "frames",
  initialState: {
    products: [
      {
        id: 1,
        name: "saturn memory pillow top",
        price: 1200,
        pics: bed1,
        hoverPics: bed2,
      },
      {
        id: 2,
        name: "ottoman design",
        price: 1200,
        pics: bed2,
        hoverPics: bed3,
      },
      {
        id: 3,
        name: "ottoman bed frame",
        price: 1200,
        pics: bed3,
        hoverPics: bed4,
      },
      {
        id: 4,
        name: "cool touch mattress",
        price: 1200,
        pics: bed4,
        hoverPics: bed5,
      },
      {
        id: 5,
        name: "elegant procket spring mattress",
        price: 1200,
        pics: bed5,
        hoverPics: bed6,
      },
      { id: 6, name: "bed soft ", price: 1200, pics: bed6, hoverPics: bed1 },
    ],
  },
  reducers: {
    setFrame: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setFrame } = framesSlice.actions;
export default framesSlice.reducer;

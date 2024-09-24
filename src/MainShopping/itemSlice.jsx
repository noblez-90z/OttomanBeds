// src/slices/itemSlice.js
import { createSlice } from "@reduxjs/toolkit";
import bed from "../assets/ottoman.avif.png";
import bed1 from "../assets/09_0003_P4_F1_LSV2_H4_54_ELS_RHS.avif";
import bed2 from "../assets/09_0003_P4_F1_LSV2_H8_54_ELS_Front.avif";
import bed3 from "../assets/09_0003_P4_F1_LSV2_H10_54_ELS_RHS.avif";
import bed4 from "../assets/18_0002_H22C_F1_EndLift_Deep_Front__LM.avif";
import bed5 from "../assets/ChesterdfieldWingback_54inch_H17_54_HeadOnly_LHS_dd6c5e86-8156-4b16-bcde-6f058f7cba87.webp";
import bed6 from "../assets/ChesterdfieldWingback_54inch_HeadOnly_Front.avif";
import bed7 from "../assets/Elegant-5000-Pocket-Spring-mattress-p3-750x510_57e2e969-912f-4301-83df-06d321330366 (1).webp";
import bed9 from "../assets/swatches.webp";
import bed10 from "../assets/OttomanEndLiftBaseclosed.webp";
import bed11 from "../assets/OttomanEndLiftBaseopenviewinside.avif";
import bed12 from "../assets/OttomanSideOpeningBaseopenviewinside.webp";
import bed13 from "../assets/Saturn-Memory-Pillow-Top-P3_6e34cde0-596c-48b6-9c8e-2604fdca4456.webp";
import bed14 from "../assets/side-ottoman-bed-open-1-grey-logo-light-grey-handholes_12aec5d8-2429-4189-98d1-782c4e75124c.webp";

const initialState = {
  items: [
    {
      id: 1,
      name: "ottoman bed without heaboard",
      price: 470.0,
      pics: bed10,
      hoverPics: bed1,
      btn: "customize your bed",
    },
    {
      id: 2,
      name: "safina chesterfeild ottoman bed",
      price: 470.0,
      pics: bed1,
      hoverPics: bed2,
      btn: "customize your bed",
    },
    {
      id: 3,
      name: "storage bed chesterfeild",
      price: 470.0,
      pics: bed2,
      hoverPics: bed3,

      btn: "customize your bed",
    },
    {
      id: 4,
      name: "ottoman gas lift bed soneros",
      price: 470.0,
      pics: bed3,
      hoverPics: bed4,

      btn: "customize your bed",
    },
    {
      id: 5,
      name: "ottoman bed alvador",
      price: 470.0,
      pics: bed4,
      hoverPics: bed5,

      btn: "customize your bed",
    },
    {
      id: 6,
      name: "majestic wingback chesterfeild",
      price: 275.0,
      pics: bed5,
      hoverPics: bed6,

      btn: "customize your bed",
    },
    {
      id: 7,
      name: "queen anne wingback headboard",
      price: 470.0,
      pics: bed6,
      hoverPics: bed7,

      btn: "customize your bed",
    },
    {
      id: 8,
      name: "cool Gel 5000 pocket sprung matresses",
      price: 455.0,
      pics: bed7,
      hoverPics: bed9,
    },
    {
      id: 9,
      name: "cool Gel 4000 pocket sprung matresses",
      price: 455.0,
      pics: bed9,
      hoverPics: bed12,
    },
    {
      id: 10,
      name: "latex pillow top 3000 pocket sprung mattress",
      price: 455.0,
      pics: bed10,
      hoverPics: bed11,
    },
    {
      id: 11,
      name: "latex pillow top 2000 pocket sprung mattress",
      price: 455.0,
      pics: bed11,
    },
    {
      id: 12,
      name: "latex pillow top 1500 pocket sprung mattress",
      price: 455.0,
      pics: bed12,
      hoverPics: bed10,
    },
    {
      id: 13,
      name: "santrun Memory Pillow",
      price: 455.0,
      pics: bed13,
      hoverPics: bed14,
    },
    {
      id: 14,
      name: "ottoman open bed",
      price: 455.0,
      pics: bed14,
      hoverPics: bed10,
    },
  ],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
});

export const selectItems = (state) => state.items.items;
export default itemSlice.reducer;

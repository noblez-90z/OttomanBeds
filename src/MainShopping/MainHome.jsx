// src/components/HomePage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "./cartSlice";
import { addToWishlist } from "./wishlistSlice";

import { selectItems } from "./itemSlice";

import ItemListThree from "./ItemListThree";
import Layout from "../HomeComponenet.jsx/Layout";

const MainHomePage = () => {
  const items = useSelector(selectItems);

  const [sortOption, setSortOption] = useState("");
  const [displayProduct, setDisplayProduct] = useState(items);
  useEffect(() => {
    let updatedProduct = [...items];

    if (sortOption === "name-asc") {
      updatedProduct.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      updatedProduct.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "price-asc") {
      updatedProduct.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      updatedProduct.sort((a, b) => b.price - a.price);
    }

    setDisplayProduct(updatedProduct);
  }, [sortOption, items]);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  return (
    <Layout>
      <div>
        <div className="h-[150px] flex justify-center items-center bg-[#757575] text-white capitalize">
          <h1 className="text-2xl font-semibold">homePage</h1>
        </div>

        <div className="">
          <label htmlFor="sort">sort by:</label>
          <select
            name=""
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            id=""
          >
            <option value="">none</option>
            <option value="name-asc">Alphabetical a-z</option>
            <option value="name-desc">Alphabetical z-a</option>
            <option value="price-asc">price (low - high)</option>
            <option value="price-desc">price (high - low)</option>
          </select>
        </div>

        <ItemListThree
          // items={items}
          items={displayProduct}
          addToCart={handleAddToCart}
          addToWishlist={handleAddToWishlist}
        />
      </div>
    </Layout>
  );
};

export default MainHomePage;

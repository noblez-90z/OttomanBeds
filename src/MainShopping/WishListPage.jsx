// src/components/WishlistPage.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearWishList,
  removeFromWishList,
  selectWishlist,
} from "./wishlistSlice";
import { faTrashCan, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Layout from "../HomeComponenet.jsx/Layout";

const WishlistPage = () => {
  const wishlistItems = useSelector(selectWishlist);
  const dispatch = useDispatch();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <Layout>
      <div>
        <div className="h-[150px] flex justify-center items-center  bg-orange-200 text-white">
          <h2 className="text-2xl font-semibold">Wishlist</h2>
        </div>
        <div className="relative w-full mb-6">
          <h1
            className="cursor-pointer text-right absolute  right-1 w-fit  border capitalize"
            onClick={() => dispatch(clearWishList())}
          >
            <FontAwesomeIcon icon={faXmarkCircle} /> clear wishlist
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-3">
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <div className="">
              {wishlistItems.map((item, index) => (
                <div key={item.id} className="w-full capitalize ">
                  <Link to={`/item/${item.id}`}>
                    <div
                      key={item.id}
                      className={` h-64 md:h-[300px]  w-full flex  justify-center items-end relative   rounded shadow  bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out `}
                      // style={{
                      //   backgroundImage: `url(${
                      //     hoveredProductId === item.id ? item.hoverPics : item.pics
                      //   })`,
                      // }}
                      onMouseEnter={() => setHoveredProductId(item.id)}
                      onMouseLeave={() => setHoveredProductId(null)}
                    >
                      <img
                        src={
                          hoveredProductId === item.id
                            ? item.hoverPics
                            : item.pics
                        }
                        alt={item.name}
                        className="object-fit object-center w-full h-full rounded"
                      />

                      <div className="border  ">
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          onClick={() => dispatch(removeFromWishList(item.id))}
                          className="border p-2 bottom-4 mx-auto left-0 right-0  z-10 absolute rounded-full  bg-white text-black hover:bg-black hover:text-white"
                        />
                      </div>
                    </div>
                    <button className="py-2 px-2 md:px-6 border block mx-auto my-2 rounded-full shadow-lg text-white bg-blue-600 capitalize">
                      {item.btn}
                    </button>
                    <div className="">
                      <h3 className=" font-bold md:text-xl">{item.name}</h3>
                      <p className="text-slate-500">Price: ${item.price}</p>
                      {/* <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                  >
                    Add to Cart
                  </button> */}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;

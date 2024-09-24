import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectItems } from "./itemSlice";
import { addToWishlist } from "./wishlistSlice";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemListTwo = ({ addToCart }) => {
  const items = useSelector(selectItems); // Use the selector to access all items

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [moreProduct, setMoreProduct] = useState(false);
  const handleMoreProduct = () => {
    setMoreProduct(!moreProduct);
  };
  const dispatch = useDispatch();

  return (
    <div className="border-2 border-red-500">
      <div className="text-center my-4">
        <h1 className="font-extrabold uppercase text-xl">trending</h1>
        <div className="flex gap-4 justify-center py-3">
          <span className="w-5 h-[2px] bg-gray-500"></span>
          <span className="w-5 h-[2px] bg-gray-500"></span>
        </div>
        <p className="capitalize italic text-gray-500 mb-3 pb-4">
          top veiw in this week
        </p>
      </div>

      <div
        className={` grid grid-cols-2 md:grid-cols-3 gap-4 px-3 ${
          moreProduct ? "h-[800px] md:h-[838px]" : "h-fit"
        } overflow-y-hidden`}
      >
        {items === 0 ? (
          <p>No items available</p>
        ) : (
          items.map((item) => (
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
                      hoveredProductId === item.id ? item.hoverPics : item.pics
                    }
                    alt={item.name}
                    className="object-fit object-center w-full h-full rounded"
                  />

                  <div className="border z-30 ">
                    <Link to="/Wishlist">
                      <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => dispatch(addToWishlist(item))}
                        className="border p-2 bottom-4 mx-auto left-0 right-0  z-30 absolute rounded-full  bg-white text-black hover:bg-black hover:text-white"
                      />
                    </Link>
                  </div>
                </div>
                <button className="py-2 px-1 md:px-6 border block mx-auto my-2 rounded-full shadow-lg text-white bg-blue-600 capitalize">
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
          ))
        )}
      </div>
      <button
        onClick={handleMoreProduct}
        className="block mx-auto border py-2 px-3 rounded-full capitalize my-3"
      >
        load more{" "}
      </button>
    </div>
  );
};

export default ItemListTwo;

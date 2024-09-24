import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import { selectItems } from "./itemSlice";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemListThree = ({ addToCart, addToWishlist, items }) => {
  // const items = useSelector(selectItems); // Use the selector to access all items

  // const [sortOption, setSortOption] = useState("");
  // const [displayProduct, setDisplayProduct] = useState(items);
  // useEffect(() => {
  //   let updatedProduct = [...items];
  //   console.log(updatedProduct);

  //   if (sortOption === "name-asc") {
  //     updatedProduct.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (sortOption === "name-desc") {
  //     updatedProduct.sort((a, b) => b.name.localeCompare(a.name));
  //   } else if (sortOption === "price-asc") {
  //     updatedProduct.sort((a, b) => a.price - b.price);
  //   } else if (sortOption === "price-desc") {
  //     updatedProduct.sort((a, b) => b.price - a.price);
  //   }
  //   console.log(updatedProduct);
  //   setDisplayProduct(updatedProduct);
  //   console.log(displayProduct);
  // }, [sortOption, items]);

  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <div className="">
      {/* <label htmlFor="sort">sort by:</label>
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
      </select> */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-3 ">
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

                  <div className="border  ">
                    <FontAwesomeIcon
                      icon={faHeart}
                      onClick={() => addToWishlist(item)}
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
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListThree;

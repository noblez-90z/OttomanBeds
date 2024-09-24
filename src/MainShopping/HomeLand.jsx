import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { addToWishlist } from "./wishlistSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Layout from "../HomeComponenet.jsx/Layout";

const HomeLand = () => {
  const beds = useSelector((state) => state.bed.products);
  const frames = useSelector((state) => state.frames.products);
  const dispatch = useDispatch();

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };
  return (
    <Layout>
      <div className="py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-3 ">
          {beds.map((product) => (
            <div className="w-full capitalize" key={product.id}>
              <Link to={`/itemFrame/${product.id}`}>
                <div
                  className={` h-64 md:h-[300px]  w-full flex  justify-center items-end relative   rounded shadow  bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out `}
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <img
                    src={
                      hoveredProductId === product.id
                        ? product.hoverPics
                        : product.pics
                    }
                    alt={product.name}
                    className="object-fit object-center w-full h-full rounded"
                  />
                  <div className="border  ">
                    <FontAwesomeIcon
                      icon={faHeart}
                      onClick={() => {
                        handleAddToWishlist(product);
                      }}
                      className="border p-2 bottom-4 mx-auto left-0 right-0  z-10 absolute rounded-full  bg-white text-black hover:bg-black hover:text-white"
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className=" font-bold md:text-xl">{product.name}</h3>
                  <p className="text-slate-500">Price: ${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-3">
          {frames.map((product) => (
            <div className="w-full capitalize" key={product.id}>
              <Link to={`/itemFrame/${product.id}`}>
                <div
                  className={` h-64 md:h-[300px]  w-full flex  justify-center items-end relative   rounded shadow  bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out `}
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <img
                    src={
                      hoveredProductId === product.id
                        ? product.hoverPics
                        : product.pics
                    }
                    alt={product.name}
                    className="object-fit object-center w-full h-full rounded"
                  />
                  <div className="border  ">
                    <FontAwesomeIcon
                      icon={faHeart}
                      onClick={() => {
                        handleAddToWishlist(product);
                      }}
                      className="border p-2 bottom-4 mx-auto left-0 right-0  z-20 absolute rounded-full  bg-white text-black hover:bg-black hover:text-white"
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className=" font-bold md:text-xl">{product.name}</h3>
                  <p className="text-slate-500">Price: ${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomeLand;

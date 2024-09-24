import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "./wishlistSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Layout from "../HomeComponenet.jsx/Layout";

const Bed = () => {
  const beds = useSelector((state) => state.bed.products);
  const dispatch = useDispatch();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <Layout>
      <div className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-3 ">
          {beds === 0 ? (
            <p>No items available</p>
          ) : (
            beds.map((item) => (
              <div key={item.id} className="w-full capitalize ">
                <Link to={`/itemBed/${item.id}`}>
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
                        icon={faHeart}
                        onClick={() => dispatch(addToWishlist(item))}
                        className="border p-2 bottom-4 mx-auto left-0 right-0  z-10 absolute rounded-full  bg-white text-black hover:bg-black hover:text-white"
                      />
                    </div>
                  </div>

                  <div className="">
                    <h3 className=" font-bold md:text-xl">{item.name}</h3>
                    <p className="text-slate-500">Price: ${item.price}</p>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Bed;

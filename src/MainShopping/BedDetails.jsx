import { Link, useParams } from "react-router-dom";
import { selectItems } from "./itemSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectCart,
} from "./cartSlice";
import { addToWishlist } from "./wishlistSlice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart,
  faPlusSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faTruckFast,
  faLocationDot,
  faMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import visa from "../assets/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg";
import shopify from "../assets/shopify_pay-957a48d1202dc65a7890b292de764ee886f7e64cea486ae82e291e9dc824c914.svg";
import paypal from "../assets/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg";
import master from "../assets/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg";
import maestro from "../assets/maestro-d2055c6b416c46cf134f393e1df6e0ba31722b623870f954afd392092207889c.svg";
import klarna from "../assets/klarna-389801c6056cb5600b4f05f72ebc2c58e4947688c6c4f5e6ccea41f7973d3a28.svg";
import goolePay from "../assets/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg";
import applePay from "../assets/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg";
import americanExpress from "../assets/american_express-12858714bc10cdf384b62b8f41d20f56d8c32c1b8fed98b662f2bfc158dcbcf0.svg";
import Layout from "../HomeComponenet.jsx/Layout";

const BedDetials = () => {
  const { id } = useParams();
  const items = useSelector((state) => state.bed.products);
  const item = items.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch();
  const [select, setSelect] = useState("");
  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  if (!item) {
    return <div className="">item not found!</div>;
  }
  const cartItems = useSelector(selectCart);

  const [sideCart, setSideCart] = useState(false);
  const handleSideCart = () => {
    setSideCart(!sideCart);
  };
  // const handleSide = (item) => {
  //   handleSideCart();
  //   dispatch(addToCart({ item }));
  // };

  return (
    <Layout>
      <div className="px-4">
        <div className="block md:flex items-center ">
          <div className="px-4 py-3">
            <div className="">
              <img src={item.pics} alt={item.name} className="md:w-[500px]" />
            </div>
            <div className="hidden md:block">
              <img
                src={item.hoverPics}
                alt={item.name}
                className="bg-black  w-[200px]"
              />
            </div>
          </div>
          <div className="px-4 capitalize">
            <h1 className="font-bold py-3">{item.name} </h1>
            <p> {select}</p>

            <div className=" w-60 md:w-[400px]">
              <select
                name=""
                className="border rounded w-full py-3"
                onClick={(e) => setSelect(e.target.value)}
              >
                <option className="border-2 border-blue-600" value="">
                  small single 2ft6
                </option>
                <option value="">single 3ft</option>
                <option value="">small double 4ft</option>
                <option value="">double 4ft6</option>
                <option value="">king size 5ft</option>
                <option value="">super king 6ft</option>
              </select>
            </div>
            <p className="font-bold py-3 text-[#00abba]">${item.price} </p>
            <div className="py-3">
              <FontAwesomeIcon
                icon={faHeart}
                className="p-2 rounded-full border"
                onClick={() => dispatch(addToWishlist(item))}
              />
            </div>
            <div className="flex items-center gap-4 border rounded-full w-fit h-fit py-2 px-3">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => handleDecrease(item.id)}
              />
              <p>{item.quantity}</p>
              <FontAwesomeIcon
                icon={faPlusSquare}
                onClick={() => handleIncrease(item.id)}
              />
            </div>

            <div className="" onClick={handleSideCart}>
              <button
                className="bg-[#00abba] text-white font-semibold mt-4 w-full py-2 px-3 text-center rounded-full capitalize"
                onClick={() => dispatch(addToCart(item))}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="border py-4 px-4 capitalize rounded-md">
          <p>
            free shipping to <span className="font-bold">nigeria</span> order
            within the next{" "}
            <span className="font-bold pr-1">
              00 Hours 24 minutes 57 seconds
            </span>
            for dispatch today, and you'll recieve your package within{" "}
            <span className="font-bold">2 weeks</span>
          </p>
        </div>
        <div className="flex w-full justify-between border px-4 py-4 capitalize mt-4">
          <div className="block md:flex gap-4 items-center text-center">
            <FontAwesomeIcon icon={faBagShopping} className="text-[#00abba]" />
            <div className="">
              <p className="font-semibold text-[#00abba]">ordered</p>
              <p>order day to day-5</p>
            </div>
          </div>
          <div className="block md:flex gap-4 items-center text-center">
            <FontAwesomeIcon icon={faTruckFast} className="text-[#00abba]" />
            <div className="">
              <p className="font-semibold text-[#00abba]">order ready</p>
              <p>day-3 to day-9</p>
            </div>
          </div>
          <div className=" block md:flex gap-4 items-center text-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mx-auto text-center text-[#00abba]"
            />
            <div className="">
              <p className="font-semibold text-[#00abba] ">delivered</p>
              <p>day-10 to day-14</p>
            </div>
          </div>
        </div>
        <div className="px-4 flex gap-1 flex-wrap text-center mt-4 ">
          <img src={visa} alt="visa" />
          <img src={americanExpress} alt="american_express" />
          <img src={applePay} alt="apple_pay" />
          <img src={shopify} alt="shopify" />
          <img src={klarna} alt="klarna" />
          <img src={goolePay} alt="google_pay" />
          <img src={master} alt="master" />
          <img src={maestro} alt="maestro" />
          <img src={paypal} alt="paypal" />
        </div>
        <div className="px-4 py-3 capitalize">
          <h3 className="py-2 font-bold">ask a question</h3>
          <p>availability: in stock</p>
          <p>categories: all headboards, home page</p>
          <p>tags: floor standing headboard, headboard wingback</p>
          <div className="py-3 flex gap-4 ">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />

            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
        <div
          className={`${
            sideCart ? "block" : "hidden"
          }  border-2 border-blue-500 bg-white h-screen w-[80%] md:w-[40%] absolute top-0 right-0`}
        >
          <div className="flex justify-between py-3 px-3 border-b">
            <h2>Shopping Cart </h2>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleSideCart}
              className="cursor-pointer"
            />
          </div>

          <div className="py-3">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="flex justify-between gap-3  border-b py-2 px-3 "
              >
                <img
                  src={item.pics}
                  alt={item.name}
                  className="h-[150px] w-[150px]"
                />
                <div className=" block  w-full justify-between">
                  <div className="">
                    <p className="font-bold py-2">{item.name}</p>
                    <p>
                      <span className="font-bold">size:</span> king ft6
                    </p>
                    <p>
                      <span className="font-bold">estimated date:</span> within
                      2 weeks
                    </p>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                  <p>${item.price}</p>
                  <div className="flex items-center gap-4 border rounded-full w-fit h-fit py-2 px-3">
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleDecrease(item.id)}
                    />
                    <p>{item.quantity}</p>
                    <FontAwesomeIcon
                      icon={faPlusSquare}
                      onClick={() => handleIncrease(item.id)}
                    />
                  </div>
                  <p>${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 border-t shadow-xl mt-20">
            <p className="py-2">
              tax included and shipping calcuted at check out
            </p>
            <div className=" py-3 capitalize">
              <input
                type="checkbox"
                className="border border-[#00abba] mr-2"
                required
              />
              <label htmlFor="">i agree with terms and conditions</label>
            </div>
            <button className="border border-[#00abba] font-semibold w-full capitalize rounded-full py-2">
              <Link to="/Cart">veiw cart</Link>
            </button>
            <button className="bg-[#00abba] font-semibold text-white w-full capitalize rounded-full py-2 my-2">
              <Link>check out</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BedDetials;

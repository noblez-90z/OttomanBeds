// src/components/CartPage.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCart,
} from "./cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faTrashCan,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMinus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();
  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <div className="">
      <div className="h-[150px] flex justify-center items-center  bg-orange-200 text-white">
        <h1 className="font-bold text-2xl">shopping cart</h1>
      </div>
      <div className="relative w-full mb-6">
        <h1
          className="cursor-pointer text-right absolute  right-1 w-fit  border capitalize"
          onClick={() => dispatch(clearCart())}
        >
          <FontAwesomeIcon icon={faXmarkCircle} /> clear cart
        </h1>
      </div>
      <div>
        {/* <h2 className=" mb-4">Shopping Cart</h2> */}
        {cartItems.length === 0 ? (
          <div className=" w-full border text-center">
            <p>Your cart is empty.</p>

            <FontAwesomeIcon icon={faCartShopping} className="text-6xl" />
            <div className=" mx-auto border py-2 px-3 rounded-full md:w-[30%] text-center">
              <Link to="/Shop">return to shop</Link>
            </div>
          </div>
        ) : (
          <div className=" capitalize">
            <div className=" hidden md:flex justify-between font-bold border-b py-2 px-3">
              <p className="w-96">product</p>
              <p>price</p>
              <p>quantity</p>
              <p>total</p>
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
                  <div className=" block md:flex w-full justify-between">
                    <div className="">
                      <p className="font-bold py-2">{item.name}</p>
                      <p>
                        <span className="font-bold">size:</span> king ft6
                      </p>
                      <p>
                        <span className="font-bold">estimated date:</span>{" "}
                        within 2 weeks
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
          </div>
        )}
      </div>
      <div className="px-4">
        <h2 className="text-center py-2">add order note </h2>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="how can we help you?"
          className="border w-full"
        ></textarea>
      </div>
    </div>
  );
};

export default CartPage;

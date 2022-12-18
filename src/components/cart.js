import React from "react";
import "./cart.css";
import BackDrop from "./backdrop";
export const Cart = (props) => {
  return (
    <div className="cart">
      <BackDrop onCloseLayer={props.closeCart} />
      <div className="cart-container">
        <div className="cart-title_container">
          <span>Cart</span>
          <span onClick={props.closeCart} className="material-icons-outlined">
            close
          </span>
        </div>
        <hr />
        <div className="cart-item_area">Your cart is currently empty.</div>
      </div>
    </div>
  );
};

import "./cart.css";
import Basket from "./basket";
import { useState } from "react";
function Cart() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span
        onClick={() => setOpen(!open)}
        className="material-icons-outlined cart-icon"
      >
        shopping_cart
      </span>
      {open && <Basket className="cart-basket" />}
    </div>
  );
}

export default Cart;

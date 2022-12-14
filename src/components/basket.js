import CartProduct from "./cart-Product";
import "./basket.css";

function Basket(props) {
  const basketClasses = "basket " + props.className;
  return (
    <div className={basketClasses}>
      <div className="basket-title">
        <span>Query ID:</span>
        <span>1239829389</span>
      </div>
      <div className="basket-summary-title">Summary</div>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      {/* <div className="basket-price-table">
        <span>Subtotal</span>
        <span>$300.00</span>
      </div>
      <div className="basket-price-table">
        <span>Shipping</span>
        <span>$19.00</span>
      </div> */}
      <div className="basket-price-table">
        <span>Total</span>
        <span>$500.00</span>
      </div>
    </div>
  );
}

export default Basket;

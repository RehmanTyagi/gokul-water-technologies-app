import "./cart-Product.css";
import ProductImg from "../assets/product-img/product-sample.jpg";

function CartProduct() {
  return (
    <div className="product">
      <img alt="product" className="product-img" src={ProductImg}></img>
      <div className="product-title">
        <div>Apple Watch</div>
        <div>Mindnight Almunium Case</div>
      </div>
      <div className="product-price-table">
        <div>$2000</div>
        <div>
          Qty: <span>10</span>
        </div>
      </div>
    </div>
  );
}
export default CartProduct;

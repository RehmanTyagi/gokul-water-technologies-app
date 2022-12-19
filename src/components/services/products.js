import "../services/products.css";
import img from "../../assets/imgs/etp-plant.png";

const Product = () => {
  return (
    <div className="product-wrapper">
      <img alt="img" src={img} />
      <h2>ETP Module</h2>
      <p>ETP plant for Effluent Treatment.</p>
      <button>Send Query</button>
    </div>
  );
};
export default Product;

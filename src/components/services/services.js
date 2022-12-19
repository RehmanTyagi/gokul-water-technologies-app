import "../services/services.css";
import Products from "../services/products";
const Services = () => {
  return (
    <div className="services-section">
      <h1 className="section-title">Our Services</h1>
      <div className="products-container">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  );
};
export default Services;

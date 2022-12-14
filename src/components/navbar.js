import "./navbar.css";
import CompanyLogo from "../assets/logo/gokul-logo.jpg";
import SearchBar from "./searchBar";
import Cart from "./cart";

function Navbar() {
  return (
    <div className="navbar">
      <img src={CompanyLogo} className="logo"></img>
      <SearchBar />
      <Cart className="cart" />
    </div>
  );
}
export default Navbar;

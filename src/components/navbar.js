import "./navbar.css";
import CompanyLogo from "../assets/logo/gokul-logo.jpg";
import UserArea from "./user-area";
import NavbarLinks from "./navbarLinks";
function Navbar(props) {
  return (
    <div className="navbar">
      <img alt="logo" src={CompanyLogo} className="logo"></img>
      <NavbarLinks />
      <UserArea />
    </div>
  );
}
export default Navbar;

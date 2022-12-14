import WhatsAppIcon from "../assets/social-icons/001-whatsapp.png";
import FaceBookIcon from "../assets/social-icons/002-facebook.png";
import LinkedinIcon from "../assets/social-icons/003-instagram.png";
import InstagramIcon from "../assets/social-icons/004-linkedin.png";
import "./TopHeader.css";
function TopHeader() {
  return (
    <div className="top-Header">
      <div className="toll-free">
        <span className="material-icons-outlined">phone_iphone</span>
        <span>Toll Free (+91) 7701987693, 8920234339 </span>
      </div>
      <div className="contact-us_top__header">
        <img className="social-icons" alt="icon" src={WhatsAppIcon}></img>
        <img className="social-icons" alt="icon" src={FaceBookIcon}></img>
        <img className="social-icons" alt="icon" src={LinkedinIcon}></img>
        <img className="social-icons" alt="icon" src={InstagramIcon}></img>
      </div>
      <div className="user-login_area">
        <span className="material-icons-outlined">account_circle</span>
        <span className="user-area-btns">
          <a href="http://gokulwatertechnologies.in/">Login</a>
          <a href="http://gokulwatertechnologies.in/">Register</a>
        </span>
      </div>
    </div>
  );
}

export default TopHeader;

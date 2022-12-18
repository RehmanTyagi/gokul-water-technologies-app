import WhatsAppIcon from "../assets/social-icons/005-whatsapp.png";
import FaceBookIcon from "../assets/social-icons/002-facebook.png";
import LinkedinIcon from "../assets/social-icons/004-instagram.png";
import InstagramIcon from "../assets/social-icons/001-linkedin.png";
import "./TopHeader.css";
function TopHeader() {
  return (
    <div className="top-header">
      <div className="toll-free">
        <span className="material-icons-outlined">phone_iphone</span>
        <span>
          Office No (+91) <a href="tel:917701987693">7701987693</a>,{" "}
          <a href="tel:918920234339">8920234339</a>{" "}
        </span>
        <span>
          Email:{" "}
          <a href="mailto:gokulwatertechnologies@gmail.com">
            gokulwatertechnologies@gmail.com
          </a>
        </span>
      </div>
      <div className="contact-us_top__header">
        <div>
          <img className="social-icons" alt="icon" src={WhatsAppIcon}></img>
        </div>
        <div>
          <img className="social-icons" alt="icon" src={FaceBookIcon}></img>
        </div>
        <div>
          <img className="social-icons" alt="icon" src={LinkedinIcon}></img>
        </div>
        <div>
          <img className="social-icons" alt="icon" src={InstagramIcon}></img>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;

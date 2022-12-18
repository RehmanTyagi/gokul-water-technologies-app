import "./newsLetter.css";
import NewsLetterImg from "../assets/logo/gokul-logo.jpg";
import BackDrop from "./backdrop";
const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <BackDrop />
      <div className="newsletter">
        <img src={NewsLetterImg} />
        <div>
          <h1>newsletter</h1>
          <p>
            Enter your email below to receive Offers on products & Services.
          </p>
          <div>
            <input type="email" placeholder="Your email address" />
            <span className="material-icons-outlined">email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

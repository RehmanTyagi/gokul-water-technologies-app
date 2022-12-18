import "./heroSlider.css";
import Poster from "../assets/imgs/etp-plant.png";
const HeroSlider = () => {
  return (
    <div className="poster-wrapper">
      <img src={Poster} alt="poster" className="hero-poster" />
      <div className="hero-poster_text__content">
        <h1>Don't worry about your waste-water, We are for you!</h1>
        <p>A fully trusted brand in the industry by its incredible services.</p>
      </div>
    </div>
  );
};
export default HeroSlider;

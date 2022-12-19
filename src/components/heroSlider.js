import "./heroSlider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Poster from "../assets/imgs/3d-poster-two.png";
import PosterThree from "../assets/imgs/3d-poster-three.png";
const HeroSlider = () => {
  return (
    <Swiper
      className="slider-wrapper"
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      autoplay={true}
      slidesPerView={1}
      onSlideChange={() => {}}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {" "}
        <div className="poster-wrapper">
          <img src={Poster} alt="poster" className="hero-poster" />
          <div className="hero-poster_text__content">
            <h1>Don't worry about your waste-water, We are for you!</h1>
            <p>
              A fully trusted brand in the industry by its incredible services.
            </p>
            <div className="user-action_btns">
              <button className="get-quote-btn">Get Quote</button>
              <button className="get-quote-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="poster-wrapper poster-wrapper_two">
          <img src={PosterThree} alt="poster" className="hero-poster" />
          <div className="hero-poster_text__content">
            <h1>Reuse every drop of water. Water pure Life pure!</h1>
            <p>
              A fully trusted brand in the industry by its incredible services.
            </p>
            <div className="user-action_btns">
              <button className="get-quote-btn">Get Quote</button>
              <button className="get-quote-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default HeroSlider;

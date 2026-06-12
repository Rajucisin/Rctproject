import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const BannerSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="banner-img">
        <img src={slide1} alt="Banner 1" className="banner-image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-img">
        <img src={slide2} alt="Banner 2" className="banner-image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner-img">
            <img src={slide3} alt="Banner 3" className="banner-image" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
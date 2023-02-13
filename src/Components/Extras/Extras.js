import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Extras = () => {
  register();
  return (
    <Box mt={5}>
      {" "}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={
              "https://www.airvistara.com/content/dam/airvistara/global/english/home-page/extras/vistara-meet-and-assist.png"
            }
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://www.airvistara.com/content/dam/airvistara/global/english/home-page/extras/vistara-meet-and-assist.png"
            }
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://www.airvistara.com/content/dam/airvistara/global/english/home-page/extras/vistara-meet-and-assist.png"
            }
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://www.airvistara.com/content/dam/airvistara/global/english/home-page/extras/vistara-meet-and-assist.png"
            }
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://www.airvistara.com/content/dam/airvistara/global/english/home-page/extras/vistara-meet-and-assist.png"
            }
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://www.airvistara.com/content/dam/airvistara/global/english/home-page/extras/vistara-meet-and-assist.png"
            }
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://www.airvistara.com/content/dam/airvistara/global/english/home-page/extras/vistara-meet-and-assist.png"
            }
          ></img>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Extras;

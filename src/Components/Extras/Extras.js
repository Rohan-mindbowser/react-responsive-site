import { Box, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { EXTRAS_IMAGE_SLIDER } from "../../constant";

const Extras = () => {
  register();
  return (
    <Box mt={7} mb={5}>
      <Typography variant="h4" mb={2} sx={{ color: "#913175" }}>
        Extras
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {EXTRAS_IMAGE_SLIDER.map((image, id) => {
          return (
            <SwiperSlide key={id}>
              <Box sx={{ position: "relative" }}>
                <img className="extra_image" src={image} alt="extras"></img>
                <div className="extras_image_hover">
                  <Typography sx={{ color: "white", fontWeight: "700" }}>
                    Vistara Select
                  </Typography>
                  <ArrowCircleRightOutlinedIcon sx={{ color: "white" }} />
                </div>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Extras;
